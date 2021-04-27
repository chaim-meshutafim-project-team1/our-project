const { json } = require('body-parser');
const puppeteer = require('puppeteer');
const urlToScrape = 'https://www.yad2.co.il/item/a6ejvs';

const yad2Scraper = async (url)=>{
 try{
  let prodObj={
   title:'',   
   description:'',
   price:0,
   
  };
 const browser = await puppeteer.launch();
 const page = await browser.newPage();
 await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
 await page.goto(url, {waitUntil: 'networkidle2'}); 

  const description = await page.evaluate(() => {
   const text = document.querySelector('.details_text').textContent; 
   return text;
  });
  const  prodStatus = await page.evaluate(() => {
   const description = document.querySelector('#important_item_status_0').textContent.trim();
   return description;
  });
  //document.querySelector('.image_con>img').src  //image src
  //document.querySelector('.price').textContent  //price
  //document.querySelector('.content .title').textContent  //title
  //document.querySelector('#important_item_updated_at_0').textContent.trim();  //updated
  
  
  await browser.close();
  console.log(description, prodStatus);
 }catch(error){console.log('error runnignthe func', error);}
}
console.log(yad2Scraper(urlToScrape));
