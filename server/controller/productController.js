const { Product } = require('../models/product.model.js')
const CheckDay = require('../utils/daysPassSince')
const translate = require('../aws/translate')
const addProduct = async (productObj) => {
    const { productID, productImg, price, title, description, date, productState,url } = productObj
    try {
        
        const product = new Product({
            url:url,
            productID: productID,
            image: productImg,
            price: price,
            title: title,
            description: description,
            lastUpdate:date,
            productState: productState
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
            url,
            price,
            title,
            description,
            date,
            productState,
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
    // const { url } = req.body;
    const url = "www.google.co.il/132122834";
    const id =  url.substring(url.lastIndexOf('/') + 1)



    const product = await readProduct(id)

        const Scrape = {
            productID:id,
            url:url,  
            price:200,
            title:'headling',
            description:'hello',
            lastUpdate:new Date(),
            productState:'new',
            image:'https://images.pexels.com/photos/1590901/pexels-photo-1590901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
        
       let AddedProduct = await addProduct(Scrape);
        const fieldsToTranslate = ['title','description','productState'];
        const translated = {}; 
        translated.productID = AddedProduct.productID;
        translated.url = AddedProduct.url;
        translated.price = AddedProduct.price;
        translated.lastUpdate = AddedProduct.lastUpdate;
        translated.image = AddedProduct.image;
        console.log(AddedProduct);

        try{
            fieldsToTranslate.forEach((translateField) => translated[translateField] = translate('he','en',AddedProduct[translateField]));
        }
        catch(e) {
            return res.json({error:e.message});
        }
        // console.log('**',translated);
        res.json(translated);
}


module.exports = {
    GetTranslate,
    updateProduct,
    addProduct,
    readProduct
}