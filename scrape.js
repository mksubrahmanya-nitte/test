const { chromium } = require('playwright');
const fs = require('fs');

const urls = [
  
  { slug: "bba", url: "https://jguni.in/bba.html" },
  { slug: "imba", url: "https://jguni.in/imba.html" },
  { slug: "ibbambaaht", url: "https://jguni.in/ibbambaaht.html" },
  { slug: "ibbamba", url: "https://jguni.in/ibbamba.html" },
  { slug: "bba-hons-itrade-finance", url: "https://jguni.in/bba-hons-itrade&finance.html" },
  { slug: "bcom", url: "https://jguni.in/bcom.html" },
  { slug: "bcom-hons-acca", url: "https://jguni.in/bcom-hons-acca.html" },
  { slug: "bca", url: "https://jguni.in/bca.html" },
  { slug: "imca", url: "https://jguni.in/imca.html" },
  { slug: "imsc-it", url: "https://jguni.in/imsc-it.html" },
  { slug: "bsc-hons-imsc-forensic-science", url: "https://jguni.in/bsc-hons-imsc-forensic-science.html" },
  { slug: "bsc-hons-imsc-cyber-digital-forensic", url: "https://jguni.in/bsc-hons-imsc-cyber-digital-forensic.html" },
  { slug: "bsc-hons-imsc-quantum-computing", url: "https://jguni.in/bsc-hons-imsc-quantum-computing.html" },
  { slug: "bsc-hons-imsc-mathematics-computing", url: "https://jguni.in/bsc-hons-imsc-mathematics-computing.html" },
  { slug: "bsc-hons-imsc-clinical-embryology", url: "https://jguni.in/bsc-hons-imsc-clinical-embryology.html" },
  { slug: "bsc-hons-imsc-food-nutrition-lifestyle", url: "https://jguni.in/bsc-hons-imsc-food-nutrition-lifestyle.html" },
  { slug: "b-tech", url: "https://jguni.in/b-tech.html" },
  { slug: "b-tech-it", url: "https://jguni.in/b-tech-it.html" },
  { slug: "btech-data-science", url: "https://jguni.in/btech-data-science.html" },
  { slug: "btech-artificial-intelligence", url: "https://jguni.in/btech-artificial-Intelligence.html" },
  { slug: "btech-computer-engineering", url: "https://jguni.in/B.Tech%20Computer%20Engineering.html" },
  { slug: "btech-cse-ai", url: "https://jguni.in/B.Tech%20-%20CSE%20%5BAI%5D.html" },
  { slug: "btech-cse-ai-ml", url: "https://jguni.in/B.Tech%20-%20CSE%20%5BAI%20and%20ML%5D.html" },
  { slug: "btech-cse-big-data", url: "https://jguni.in/B.Tech%20-%20CSE%20%5BBig%20Data%20Analytics%5D.html" },
  { slug: "llb", url: "https://jguni.in/llb.html" },

  { slug: "mba", url: "https://jguni.in/mba.html" },
  { slug: "mba-international-trade-finance", url: "https://jguni.in/MBA-Internation-Trade%20&-Finance.html" },
  { slug: "mahtm", url: "https://jguni.in/MAHTM-Aviation-Hospitality-&-Travel-Management.html" },
  { slug: "mcom", url: "https://jguni.in/mcom.html" },
  { slug: "mca", url: "https://jguni.in/mca.html" },
  { slug: "msc-cyber", url: "https://jguni.in/msc-cyber.html" },
  { slug: "msc-forensic", url: "https://jguni.in/msc-forensic.html" },
  { slug: "msc-clinic", url: "https://jguni.in/msc-clinic.html" },

  { slug: "metaverse", url: "https://jguni.in/metaverse.html" },
  { slug: "data-science-ai-ml", url: "https://jguni.in/data-science-ai-ml-&-deep-learning.html" },
  { slug: "mobile-applications", url: "https://jguni.in/mobile-applications.html" },
  { slug: "blockchain", url: "https://jguni.in/blockchain.html" },
  { slug: "digital-marketing", url: "https://jguni.in/digital-marketing.html" },
  { slug: "cyber-security", url: "https://jguni.in/cyber-security.html" },
  { slug: "robotic-process-automation", url: "https://jguni.in/robotic-process-automation.html" },
  { slug: "industrial-iot", url: "https://jguni.in/industrial-internet-of-things.html" },
  { slug: "full-stack-architect", url: "https://jguni.in/full-stack-architect.html" },
  { slug: "azure-devops", url: "https://jguni.in/azure-devops.html" },

  { slug: "doctoral-programmes", url: "https://jguni.in/doctoral-programmes.html" }
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const results = {};
  let successCount = 0;
  let failCount = 0;

  for (const { slug, url } of urls) {
    try {
      const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      if (!response || response.status() >= 400) {
         console.log(`Failed (Status ${response ? response.status() : 'Unknown'}): ${url}`);
         failCount++;
         continue;
      }
      
      const data = await page.evaluate(() => {
        const getListAfter = (query) => {
          const headers = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, strong'));
          const target = headers.find(h => h.innerText && h.innerText.toLowerCase().includes(query.toLowerCase()));
          if (!target) return [];
          let next = target.nextElementSibling;
          
          let safety = 0;
          while(next && next.tagName !== 'UL' && next.tagName !== 'OL' && next.tagName !== 'DIV' && safety < 10) {
            next = next.nextElementSibling;
            safety++;
          }
          
          if (next && (next.tagName === 'UL' || next.tagName === 'OL')) {
            return Array.from(next.querySelectorAll('li')).map(li => li.innerText.trim()).filter(Boolean);
          }

          if (next && next.tagName === 'DIV') {
             const listItems = Array.from(next.querySelectorAll('li')).map(li => li.innerText.trim()).filter(Boolean);
             if (listItems.length > 0) return listItems;

             const innerElements = Array.from(next.children);
             const blockTexts = innerElements.map(el => el.innerText.trim()).filter(text => text.length > 10);
             if (blockTexts.length > 0) return blockTexts.slice(0, 10);
          }

          if (target && target.parentElement) {
            const ul = target.parentElement.querySelector('ul, ol');
            if (ul) return Array.from(ul.querySelectorAll('li')).map(li => li.innerText.trim()).filter(Boolean);
          }
          
          return [];
        };

        const title = document.querySelector('h1')?.innerText?.trim() || document.querySelector('h2')?.innerText?.trim() || "";
        const tagline = document.querySelector('h2')?.innerText?.trim() || "Innovating for a Better Future";
        
        let duration = "";
        let fees = "TBD";
        let eligibility = "";

        const allElements = Array.from(document.querySelectorAll('*'));

        const durationEl = allElements.find(el => el.innerText?.trim() === 'Duration');
        if (durationEl && durationEl.nextElementSibling) {
          duration = durationEl.nextElementSibling.innerText.trim();
        } else {
           const durMatch = document.body.innerText.match(/(?:\d+|One|Two|Three|Four|Five)\s+(?:Years|Months)/i);
           if (durMatch) duration = durMatch[0];
        }

        const eligEl = allElements.find(el => el.innerText?.trim() === 'Eligibility');
        if (eligEl && eligEl.nextElementSibling) {
          eligibility = eligEl.nextElementSibling.innerText.trim();
        } else {
          
          const text = document.body.innerText;
          if (text.includes("10+2")) eligibility = "10+2 from recognized board";
          else if (text.includes("Graduation") || text.includes("Bachelor")) eligibility = "Graduation from recognized university";
        }

        const feeMatches = document.body.innerText.match(/₹\s*[\d,]+/g);
        if (feeMatches && feeMatches.length > 0) {
           fees = feeMatches[0] + " per semester";
        }

        const specializationsStr = getListAfter('Specialization') || getListAfter('Elective');
        const highlightsStr = getListAfter('Highlight') || getListAfter('Feature');
        const objectives = getListAfter('Objective');
        const outcomes = getListAfter('Outcome');

        return {
          title,
          tagline,
          duration: duration || "TBD",
          fees: fees || "TBD",
          eligibility: eligibility || "Please contact admissions",
          specializationsStr: specializationsStr.length > 0 ? specializationsStr : ["Core Curriculum"],
          highlightsStr: highlightsStr.length > 0 ? highlightsStr : ["Industry Aligned", "Practical Training"],
          objectives: objectives.length > 0 ? objectives : undefined,
          outcomes: outcomes.length > 0 ? outcomes : undefined
        };
      });

      results[slug] = { slug, ...data };
      successCount++;
      console.log(`[SUCCESS] Scraped ${slug} | Title: ${data.title.substring(0, 30)}`);
    } catch (e) {
      console.log(`[ERROR] Failed: ${url} - ${e.message}`);
      failCount++;
    }
  }

  fs.writeFileSync('programmes_data.json', JSON.stringify(results, null, 2));
  console.log(`\n============================`);
  console.log(`Phase 1 Scraping Complete!`);
  console.log(`Success: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`============================`);
  
  await browser.close();
})();
