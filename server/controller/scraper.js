const puppeteer = require('puppeteer');
const urlToScrape = 'https://www.yad2.co.il/item/a6ejvs';
const yad2Scraper = async (url) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
        await page.goto(url, {
            waitUntil: 'networkidle2'
        });

        const description = await page.evaluate(() => {
            const result = document.querySelector('.details_text').textContent;
            return result;
        });

        const title = await page.evaluate(() => {
            const result = document.querySelector('div[class="row_title_price"]>span[class="title"]').textContent
            return result
        })

        await browser.close();

        let helper = {
            description,
            title
        }
        console.log(helper);
    } catch (error) {
        console.log('error runnignthe func', error);
    }
}
console.log(yad2Scraper(urlToScrape));