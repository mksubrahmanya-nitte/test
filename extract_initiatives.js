const fs = require('fs');

const html = fs.readFileSync('initiatives-by-jguni.html', 'utf8');

// Split by <section class="padding news
const sections = html.split(/<section/i).slice(1);

const initiatives = [];

for (const sec of sections) {
  // Check if it's a news/gallery section
  if (!sec.includes('class="padding news') && !sec.includes('news gray-bg')) {
    continue;
  }
  
  // Extract Title: <h1>...</h1>
  const titleMatch = sec.match(/<h1>([\s\S]*?)<\/h1>/i);
  if (!titleMatch) continue;
  const title = titleMatch[1].replace(/\s+/g, ' ').trim();
  
  // Extract all images in this section:
  const images = [];
  const imgRegex = /href="([^"]+\.(?:jpg|jpeg|png|JPG|PNG|webp|gif|jpeg))"/gi;
  let match;
  while ((match = imgRegex.exec(sec)) !== null) {
    const imgPath = match[1];
    // Absolute paths from root or public
    const cleanPath = imgPath.startsWith('/') ? imgPath : '/' + imgPath;
    if (!images.includes(cleanPath)) {
      images.push(cleanPath);
    }
  }
  
  // Fallback to img src if no href found
  if (images.length === 0) {
    const srcRegex = /src="([^"]+\.(?:jpg|jpeg|png|JPG|PNG|webp|gif|jpeg))"/gi;
    while ((match = srcRegex.exec(sec)) !== null) {
      const imgPath = match[1];
      const cleanPath = imgPath.startsWith('/') ? imgPath : '/' + imgPath;
      if (!images.includes(cleanPath)) {
        images.push(cleanPath);
      }
    }
  }

  initiatives.push({
    title,
    images
  });
}

console.log(`Extracted ${initiatives.length} initiatives.`);
fs.writeFileSync('extracted_initiatives.json', JSON.stringify(initiatives, null, 2));
