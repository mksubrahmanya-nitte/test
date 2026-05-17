const { chromium } = require('playwright');
const fs = require('fs');

const url = process.argv[2];
const outFile = process.argv[3] || 'live_html.txt';

if (!url) {
  console.log("Please provide a URL");
  process.exit(1);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  
  // Extract main content body to avoid header/footer noise
  const html = await page.evaluate(() => {
    // Try to find main content wrapper
    let main = document.querySelector('main') || document.querySelector('.main-content') || document.body;
    
    // Clean up scripts, styles, svgs for easier reading
    const clone = main.cloneNode(true);
    const elementsToRemove = clone.querySelectorAll('script, style, svg, iframe, header, footer, nav');
    elementsToRemove.forEach(el => el.remove());
    
    return clone.innerHTML;
  });
  
  fs.writeFileSync(outFile, html);
  console.log(`Saved HTML to ${outFile}`);
  
  await browser.close();
})();
