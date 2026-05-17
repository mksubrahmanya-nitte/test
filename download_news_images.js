// ??$$$
const fs = require('fs');
const path = require('path');
const { newsData } = require('./src/data/news.ts'); // Wait! Since it is a .ts file, let's just parse the file directly or read it!

// Direct parse of news.ts to avoid ts-node dependency
const newsTsContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'news.ts'), 'utf8');
const urls = [];
const regex = /"(images\/.*?)"/g;
let m;
while ((m = regex.exec(newsTsContent)) !== null) {
  urls.push(m[1]);
}

// Add the banner image too!
urls.push('images/news/banner.jpg');

const uniqueUrls = [...new Set(urls)];
console.log('Found ' + uniqueUrls.length + ' unique news images to download.');

// Create directories
const dirs = new Set();
uniqueUrls.forEach(url => {
  const dir = path.dirname(url);
  dirs.add(dir);
});

dirs.forEach(dir => {
  const fullDir = path.join(__dirname, 'public', dir);
  if (!fs.existsSync(fullDir)) {
    fs.mkdirSync(fullDir, { recursive: true });
  }
});

// Parallel batch downloader
async function download(url) {
  const dest = path.join(__dirname, 'public', url);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    // Already downloaded
    return;
  }
  const cleanUrl = url.replace(/ /g, '%20').replace(/\(/g, '%28').replace(/\)/g, '%29');
  const source = `https://jguni.in/${cleanUrl}`;
  try {
    const res = await fetch(source);
    if (!res.ok) {
      console.error(`Failed to download ${source}: Status ${res.status}`);
      return;
    }
    const buf = await res.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(buf));
    console.log(`Downloaded: ${url}`);
  } catch (err) {
    console.error(`Error downloading ${source}: ${err.message}`);
  }
}

async function run() {
  const poolSize = 15;
  const queue = [...uniqueUrls];
  const workers = Array(poolSize).fill(null).map(async () => {
    while (queue.length > 0) {
      const url = queue.shift();
      await download(url);
    }
  });
  await Promise.all(workers);
  console.log('All news downloads finished!');
}

run();
