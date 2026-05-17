const fs = require('fs');
const path = require('path');
const https = require('https');

const data = JSON.parse(fs.readFileSync('extracted_initiatives.json', 'utf8'));

// Extract unique image paths
const uniqueImages = new Set();
for (const item of data) {
  for (const img of item.images) {
    uniqueImages.add(img);
  }
}

const imagesArray = Array.from(uniqueImages);
console.log(`Found ${imagesArray.length} unique images referenced in initiatives.`);

// Helper to download a single file
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      
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

async function downloadWithLimit(urls, concurrencyLimit) {
  let index = 0;
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  async function worker() {
    while (index < urls.length) {
      const i = index++;
      const imgPath = urls[i];
      const localPath = path.join(__dirname, 'public', imgPath);
      const parentDir = path.dirname(localPath);

      if (fs.existsSync(localPath) && fs.statSync(localPath).size > 0) {
        skipped++;
        continue;
      }

      fs.mkdirSync(parentDir, { recursive: true });
      const url = encodeURI(`https://jguni.in${imgPath}`);

      try {
        await downloadFile(url, localPath);
        console.log(`[${i + 1}/${urls.length}] Success: ${imgPath}`);
        downloaded++;
      } catch (err) {
        console.error(`[${i + 1}/${urls.length}] Failed: ${imgPath} (${err.message})`);
        failed++;
      }
    }
  }

  const workers = [];
  for (let i = 0; i < concurrencyLimit; i++) {
    workers.push(worker());
  }
  await Promise.all(workers);

  console.log('\n--- Download Summary ---');
  console.log(`Successfully Downloaded: ${downloaded}`);
  console.log(`Skipped (Already Exists): ${skipped}`);
  console.log(`Failed/Missing: ${failed}`);
}

downloadWithLimit(imagesArray, 15);
