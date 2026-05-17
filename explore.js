const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto("https://jguni.in/bba.html");
  
  const data = await page.evaluate(() => {
    // Try to find common patterns
    const headings = Array.from(document.querySelectorAll('h1, h2, h3')).map(h => ({ tag: h.tagName, text: h.innerText.trim() }));
    
    // Look for duration/eligibility blocks
    const potentialStats = Array.from(document.querySelectorAll('div, p, span'))
      .map(el => el.innerText.trim())
      .filter(text => text.includes('Duration') || text.includes('Eligibility') || text.includes('Fee'));
      
    // Look for lists (Highlights, Outcomes)
    const lists = Array.from(document.querySelectorAll('ul, ol')).map(list => {
      const parentHeading = list.previousElementSibling ? list.previousElementSibling.innerText : '';
      return {
        heading: parentHeading,
        items: Array.from(list.querySelectorAll('li')).map(li => li.innerText.trim()).slice(0, 3) // first 3 for brevity
      };
    });

    return { headings, potentialStats: Array.from(new Set(potentialStats)).slice(0, 10), lists };
  });

  console.log(JSON.stringify(data, null, 2));
  
  await browser.close();
})();
