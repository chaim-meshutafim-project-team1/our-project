const { Product } = require('../models/product.model.js')
const CheckDay = require('../utils/daysPassSince')
const yad2Scraper = require('./scraper');
const translate = require('../aws/translate')
const addProduct = async (productObj) => {
    const { productID, productImg, price, title, description, date, productState,url } = productObj
    try {
        
        const product = new Product({
            productID: productID,
            image: productImg,
            price: price,
            title: title,
            description: description,
            lastUpdate:date
        });
        await product.save()
        return product
    }
    catch (err) {
        throw new Error(err) 
    }

}


const updateProduct = async (productObj) => {

    const { price, title, description, date, productState, imageUrl,url } = productObj

    const product = await Product.updateOne({ productID:productObj.productID }, {
        $set: {
            price,
            title,
            description,
            date,
            imageUrl
        }
    }, { new: true, runValidators: true })
       return product 
}

const readProduct = async (productID) => {

    try {
        let product = await Product.findOne({productID: productID })
        if (!product){
            return null
        }
        return product
    }
    catch (err) {
        throw new Error(err.message)
    }

}


const GetTranslate = async (req, res) => {
    const { url } = req.body;
    // const url = "www.google.co.il/132122234";
    const id =  url.substring(url.lastIndexOf('modaaNum=') + 9)
    console.log(id)


    const product = await readProduct(id)

        // const Scrape = {
        //     productID:id,
        //     price:200,
        //     title:'headling',
        //     description:'hello',
        //     lastUpdate:new Date(),
        //     image:'https://images.pexels.com/photos/1590901/pexels-photo-1590901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        // }
        
        const scrapedData = await yad2Scraper(url);
        console.log("**",scrapedData);

       let AddedProduct = await addProduct({...scrapedData,price:scrapedData.replace(/\D/g,''),productID:id});
        const fieldsToTranslate = ['title','description'];
        const translated = {}; 
        translated.productID = AddedProduct.productID;
        translated.price = AddedProduct.price;
        translated.lastUpdate = AddedProduct.lastUpdate;
        translated.image = AddedProduct.image;
        // console.log(translated);

        try{
            fieldsToTranslate.forEach((translateField) => translated[translateField] = translate('he',req.body.language,AddedProduct[translateField]));
        }
        catch(e) {
            return res.json({error:e.message});
        }
        res.json(translated);
}


module.exports = {
    GetTranslate,
    updateProduct,
    addProduct,
    readProduct
}