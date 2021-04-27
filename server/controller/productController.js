const { Product } = require('../models/product.model.js')
const CheckDay = require('../utils/daysPassSince')
// const translate = require('../aws/translate')
const addProduct = async (productObj) => {
    const { productID, productImg, price, title, description, date, productStatus,url } = productObj
    // const fields = Object.keys(req.body)
    // const allowedFields = ["productID","productImg","price", "title", "description", "date", "productStatus"]
    // const isValidOperation = fields.every((field) => {
    //     return allowedFields.includes(field)
    // })
    try {
        // if (!isValidOperation)
            // return res.status(400).send({ error: 'invalid fields' })
        // if (!productID || !productImg || !price || !title || !description || !date || !productStatus)
            // return res.status(200).send({ error: 'please input all the required fields' })
        // if (date === "עודכן היום")
            // date = new Date.now()
        const product = new Product({
            url:url,
            productID: productID,
            image: productImg,
            price: price,
            title: title,
            description: description,
            lastUpdate:date,
            productState: productStatus
        });
        await product.save()
        return product
    }
    catch (err) {
        throw new Error(err) 
    }

}

// const deleteProduct = async (req, res) => {

//     const { productID } = req.params
//     const product = await Product.findOneAndDelete({ productID: productID })
//     return res.status(200).json(product)

// }


const updateProduct = async (productObj) => {

    const { price, title, description, date, productStatus, imageUrl,url } = productObj

    const product = await Product.updateOne({ productID:productObj.productID }, {
        $set: {
            url,
            price,
            title,
            description,
            date,
            productState,
            image
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

    const id =  url.substring(url.lastIndexOf('/') + 1)



    const product = await readProduct(id)

    // if(product){
    //     // if(CheckDay(new Date(),product.lastUpdate) > 1){
            
    //         const Scrape = {
    //             productID:id,
    //             url:url,  
    //             price:200,
    //             title:'headling',
    //             description:'hello',
    //             lastUpdate:new Date(),
    //             productState:'new',
    //             image:'https://images.pexels.com/photos/1590901/pexels-photo-1590901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    //         }

    //         updateProduct(Scrape)
    //     // }


    //  }else{

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
        
       let AddedProduct =  addProduct(Scrape);
        // const fieldsToTranslate = ['title','description','productState'];
        // const translated = AddedProduct; 
        // try{
        //     fieldsToTranslate.forEach((translateField) => translated[translateField] = translate('he',req.body.targetLanguage,AddedProduct[translateField]));
        // }
        // catch(e) {
        //     return res.json({error:e.message});
        // }

        res.json(AddedProduct);
    //  }
     
}





module.exports = {
    GetTranslate,
    updateProduct,
    addProduct,
    readProduct
}