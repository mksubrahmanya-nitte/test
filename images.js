const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

(async () => {

  const raw = fs.readFileSync("site.txt", "utf8");

  const urls = [...raw.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map(m => m[1].trim())
    .filter(Boolean);

  console.log(`Found ${urls.length} URLs`);

  const outDir = path.join(__dirname, "images");

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
  }

  const browser = await chromium.launch({
    headless: false,
    args: [
      "--start-maximized",
      "--disable-blink-features=AutomationControlled"
    ]
  });

  const context = await browser.newContext({
    viewport: {
      width: 1920,
      height: 1080
    },
    deviceScaleFactor: 1
  });

  const page = await context.newPage();

  for (let i = 0; i < urls.length; i++) {

    const url = urls[i];

    try {

      console.log(`Opening ${url}`);

      await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 120000
      });

      // extra waits
      await page.waitForLoadState("networkidle");

      // allow animations/sliders
      await page.waitForTimeout(5000);

      // trigger lazy loading
      await autoScroll(page);

      // go back top
      await page.evaluate(() => {
        window.scrollTo(0, 0);
      });

      await page.waitForTimeout(2000);

      // force all lazy images visible
      await page.evaluate(() => {

        document.querySelectorAll("img").forEach(img => {

          if (img.dataset.src) {
            img.src = img.dataset.src;
          }

          if (img.dataset.lazy) {
            img.src = img.dataset.lazy;
          }

        });

      });

      const cleanName = url
        .split("/")
        .pop()
        .replace(/\.html?$/i, "")
        .replace(/[^a-z0-9-_]/gi, "_")
        || "index";

      const output = path.join(outDir, `${cleanName}.png`);

      await page.screenshot({
        path: output,
        fullPage: true,
        type: "png"
      });

      console.log(`Saved ${output}`);

    } catch (err) {

      console.log(`Failed ${url}`);
      console.log(err.message);

    }

  }

  await browser.close();

})();

async function autoScroll(page) {

  await page.evaluate(async () => {

    await new Promise((resolve) => {

      let totalHeight = 0;
      const distance = 300;

      const timer = setInterval(() => {

        window.scrollBy(0, distance);

        totalHeight += distance;

        if (totalHeight >= document.body.scrollHeight) {

          clearInterval(timer);
          resolve();

        }

      }, 300);

    });

  });

}