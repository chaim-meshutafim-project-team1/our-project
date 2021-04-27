const { json } = require('body-parser');
const puppeteer = require('puppeteer');

const urlToScrape = 'https://www.yad2.co.il/item/a6ejvs'
// const urlToScrape = 'https://gulshansainis.github.io/portfolio/'

const yad2Scraper = async (url)=>{
 try{
 const browser = await puppeteer.launch();
 const page = await browser.newPage();
 await page.goto(url, {waitUntil: 'networkidle2'}); 

  // const heading1 = await page.$eval("body > div > div > h1", el => el.textContent);
  // const test1 = await page.evaluate(() => {   document.querySelector('#portfolio>h2') });
  
  const test1 = await page.evaluate(() => {   document.querySelector('.details_text').textContent});
  // const test2 = await page.evaluate(() => {   document.querySelector('.details_text').innerHTML });
  // const test3 = await page.evaluate(() => {   document.querySelector('.details_text').innerText });
  // console.log(test1,test2, test3);
  console.log(test1)

 // console.log(title);

 await browser.close();
 }catch(error){console.log('error runnignthe func', error);}
}

console.log(yad2Scraper(urlToScrape));
