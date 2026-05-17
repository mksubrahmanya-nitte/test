const fs = require('fs');
const path = require('path');
const https = require('https');

const SRC_DIR = path.join(__dirname, 'src');
const PUBLIC_IMG_DIR = path.join(__dirname, 'public', 'images');
const BASE_URL = 'https://jguni.in';

// Helper to recursively get all files
function getAllFiles(dirPath, arrayOfFiles) {
  const currentFiles = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  currentFiles.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });
  return arrayOfFiles;
}

const files = getAllFiles(SRC_DIR);

const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/g;
const nextImageRegex = /<Image[^>]+src=["']([^"']+)["'][^>]*>/g;
const altRegex = /alt=["']([^"']*)["']/;

const downloads = [];
const missingAlts = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  
  const checkMatch = (match, tagType) => {
    const src = match[1];
    let imgName = '';
    
    if (src.startsWith('/images/')) {
      imgName = src.replace('/images/', '');
    } else if (src.startsWith('https://jguni.in/images/')) {
      imgName = src.replace('https://jguni.in/images/', '');
    }

    if (imgName) {
      const fullPath = path.join(PUBLIC_IMG_DIR, imgName);
      if (!fs.existsSync(fullPath)) {
        downloads.push({
          file: file.replace(__dirname, ''),
          imgName: imgName,
          url: `${BASE_URL}/images/${imgName}`
        });
      }
    }

    // Check for alt
    const altMatch = match[0].match(altRegex);
    if (!altMatch || altMatch[1].trim() === '') {
      missingAlts.push({
        file: file.replace(__dirname, ''),
        src: src,
        tag: match[0]
      });
    }
  };

  while ((match = imgRegex.exec(content)) !== null) checkMatch(match, 'img');
  while ((match = nextImageRegex.exec(content)) !== null) checkMatch(match, 'Image');
});

// Remove duplicates from downloads
const uniqueDownloads = [];
const seen = new Set();
downloads.forEach(d => {
  if (!seen.has(d.imgName)) {
    seen.add(d.imgName);
    uniqueDownloads.push(d);
  }
});

console.log(`Found ${uniqueDownloads.length} missing images to download.`);
console.log(`Found ${missingAlts.length} tags with missing or blank alt attributes.`);

// Download function
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  for (const d of uniqueDownloads) {
    const dest = path.join(PUBLIC_IMG_DIR, d.imgName);
    try {
      console.log(`Downloading ${d.imgName} for ${d.file}...`);
      await downloadImage(d.url, dest);
      console.log(` -> Success`);
    } catch (e) {
      console.error(` -> Failed: ${e.message}`);
    }
  }

  if (missingAlts.length > 0) {
    fs.writeFileSync('missing_alts.json', JSON.stringify(missingAlts, null, 2));
    console.log('Saved missing alts to missing_alts.json');
  }
}

run();
