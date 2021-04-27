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
    console.log(req.body);
    const id =  url.substring(url.lastIndexOf('modaaNum=') + 9)
    console.log(id)


    const product = await readProduct(id)
        const scrapedData = await yad2Scraper(url);
        console.log("**",scrapedData);

       let AddedProduct = await addProduct({...scrapedData,price:scrapedData.price.replace(/\D/g,''),productID:id});
       console.log(await readProduct(id));
        
       const fieldsToTranslate = ['title','description'];
        const translated = {}; 
        translated.productID = AddedProduct.productID;
        translated.price = AddedProduct.price;
        translated.lastUpdate = AddedProduct.lastUpdate;
        translated.image = AddedProduct.image;

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