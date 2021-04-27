const { json } = require('body-parser');
const puppeteer = require('puppeteer');
const urlToScrape = 'https://nadlan.ynet.co.il/items/6f364415-2f77-4e86-9d91-27213676edc9';

const yad2Scraper = async (url)=>{
 try{
  let prodObj={
    title:'',
    details:'',
  };
 const browser = await puppeteer.launch();
 const page = await browser.newPage();
 await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
 await page.goto(url, {waitUntil: 'networkidle2'}); 

  const prod = await page.evaluate(() => {
   const title = document.querySelector('.address-title').textContent;
   const description = document.querySelector('.comments.first').textContent;
   prodObj.title = title;
   prodObj.details = description;
   return prodObj;
  });
  const  details = await page.evaluate(() => {
   
   return description;
  });
  // prodObj.title = title;
  // prodObj.details = details;
  //document.querySelector('.image_con>img').src  //image src
  //document.querySelector('.price').textContent  //price
  //document.querySelector('.content .title').textContent  //title
  //document.querySelector('#important_item_updated_at_0').textContent.trim();  //updated
  
  
  await browser.close();
  // console.log(title, details);
  console.log('Object here: ',prodObj);
 }catch(error){console.log('error runnignthe func', error);}
}
console.log(yad2Scraper(urlToScrape));
