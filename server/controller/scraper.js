const puppeteer = require('puppeteer');

const yad2Scraper = async (url) => {
    try {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox'],
            headless: true
        })
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
        await page.goto(url, {
            waitUntil: 'networkidle2'
        });

        const description = await page.evaluate(() => {
            const result = document.querySelector('#teurWrap').textContent;
            return result;
        });
        const title = await page.evaluate(() => {
            const result = document.querySelector('.addressTop>h1>span').textContent
            return result
        })
        const price = await page.evaluate(() => {
            const result = document.querySelector('.ModaaWDetailsValue').textContent
            return result
        })
        const image = await page.evaluate(() => {
            const result = document.querySelector('.tmunotDesktop__img-container>img').src
            return result
        })

        await browser.close();


        let helper = {
            image: image,
            price: price,
            title: title.replace(/\n/g, '').split('').reverse().join('').trim(),
            description: description.replace(/\n/g, ' ').split(' ').map((word) => word.match(/[\u0590-\u05FF]/) ? word.split('').reverse().join('') : word)
            .join(' ').trim(),
            lastUpdate: new Date(),
        }

        return helper

    } catch (error) {
        console.log('error runnignthe func', error);
    }
}



module.exports = yad2Scraper

