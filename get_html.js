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

  const html = await page.evaluate(() => {
    
    let main = document.querySelector('main') || document.querySelector('.main-content') || document.body;

    const clone = main.cloneNode(true);
    const elementsToRemove = clone.querySelectorAll('script, style, svg, iframe, header, footer, nav');
    elementsToRemove.forEach(el => el.remove());
    
    return clone.innerHTML;
  });
  
  fs.writeFileSync(outFile, html);
  console.log(`Saved HTML to ${outFile}`);
  
  await browser.close();
})();
