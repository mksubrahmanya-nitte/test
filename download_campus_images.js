
const fs = require('fs');
const path = require('path');

const urls = [
  'images/campus-banner.jpg',
  'images/campus/3.jpg',
  'images/campus/4.jpg',
  'images/campus/5.jpg',
  'images/campus/6.jpg',
  'images/campus/7.jpg',
  'images/campus/8.jpg',
  'images/campus/9.jpg',
  'images/campus/10.jpg',
  'images/campus/11.jpg',
  'images/campus/12.jpg',
  'images/campus/13.jpg',
  'images/CRM08261.JPG',
  'images/CRM08221.JPG',
  'images/CRM08304.jpg',
  'images/CRM08212.JPG',
  'images/CRM08255.JPG',
  'images/1.png',
  'images/2.png',
  'images/3.png',
  'images/4.png',
  'images/5.png',
  'images/7.png',
  'images/9.png',
  'images/10.png',
  'images/lab.png',
  'images/r&d.png',
  'images/library.png',
  'images/wi-fi-campus.png',
  'images/cinema.png',
  'images/sports.png',
  'images/fitness.png'
];

const uniqueUrls = [...new Set(urls)];
console.log('Found ' + uniqueUrls.length + ' unique campus assets to download.');

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

async function download(url) {
  const dest = path.join(__dirname, 'public', url);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    
    return;
  }
  const cleanUrl = url.replace(/ /g, '%20').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/&/g, '%26');
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
  const poolSize = 10;
  const queue = [...uniqueUrls];
  const workers = Array(poolSize).fill(null).map(async () => {
    while (queue.length > 0) {
      const url = queue.shift();
      await download(url);
    }
  });
  await Promise.all(workers);
  console.log('All campus image downloads finished!');
}

run();
