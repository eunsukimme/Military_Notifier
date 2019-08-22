const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://work.mma.go.kr/caisBYIS/search/cygonggogeomsaek.do",
    { waitUntil: "networkidle2" }
  );

  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
