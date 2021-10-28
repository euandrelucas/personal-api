import puppeteer from "puppeteer"

export default async function handler(req, res) {
    // faça uma função que tira print de algum website
    // e retorne a foto
    const codePrint = Math.random().toString(36).slice(2, 10)
    async function print (site) {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox']
        });
        const page = await browser.newPage();
        await page.goto(site);
        await page.setViewport({ width: 1920, height: 1080 });
        await page.screenshot({ path: `./public/prints/${codePrint}.png` });
        await browser.close();
    }
    if (!req.query.q) {
      res.status(400).json({
        message: 'Term is missing.'
      })
    }
    const book = await print(req.query.q)
    res.status(200).json({
      data: `https://${req.headers.host}/prints/${codePrint}.png`
    })
  }
  
