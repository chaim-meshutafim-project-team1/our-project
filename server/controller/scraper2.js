const { json } = require('body-parser');
const puppeteer = require('puppeteer');

const options = {
  executablePath:
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: false,
  defaultViewport: null,
  args: ['--window-size=1920,1080'],
}

const urlToScrape = 'https://www.yad2.co.il/item/a6ejvs'

const yad2Scraper = async (url)=>{
  const browser = await puppeteer.launch(options)
  const page = await browser.newPage()
  await page.setDefaultNavigationTimeout(0)
  await page.goto(url, {waitUntil: 'networkidle2'});

  // const title = await page.title();
  // console.info(`The title is: ${title}`);

  const title = await page.$eval(".main_details > .sub_category_title> span:nth-child(0)", elem => elem.textContent);
  // let title3 = JSON.stringify(title)
  // let parsedObj = JSON.parse(title);
  console.log(title)

  await browser.close()
}


console.log(yad2Scraper(urlToScrape));