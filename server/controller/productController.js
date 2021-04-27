const { Product } = require('../models/product.model.js')


const addProduct = async (productObj) => {
    const { productID, productImg, price, title, description, date, productStatus } = req.body
    const fields = Object.keys(req.body)
    const allowedFields = ["productID","productImg","price", "title", "description", "date", "productStatus"]
    const isValidOperation = fields.every((field) => {
        return allowedFields.includes(field)
    })
    try {
        if (!isValidOperation)
            return res.status(400).send({ error: 'invalid fields' })
        if (!productID || !productImg || !price || !title || !description || !date || !productStatus)
            return res.status(200).send({ error: 'please input all the required fields' })
        if (date === "עודכן היום")
            date = new Date.now()
        const product = new Product({
            productID: productID,
            productImg: productImg,
            price: price,
            title: title,
            description: description,
            date: date,
            productStatus: productStatus
        });
        await product.save()
    }
    catch (err) {
        throw new Error('cant add product') 
    }

}

const deleteProduct = async (req, res) => {

    const { productID } = req.params
    const product = await Product.findOneAndDelete({ productID: productID })
    return res.status(200).json(product)

}


const updateProduct = (req, res) => {

    const { productID } = req.params
    const { price, title, description, date, productStatus, imageUrl } = req.body

    const product = await Product.findOneAndUpdate({ productID, productID }, {
        $set: {
            price,
            title,
            description,
            date,
            productStatus,
            imageUrl
        }
    }, { new: true, runValidators: true })
    res.status(200).json(product)
}

const readProduct = (req, res) => {
    let productID = req.params.id;
    try {
        let product = await Product.findOne({ "productID": productID })
        if (!product)
            return res.status(200).send("no such product")
        return res.status(200).send(product)
    }
    catch (err) {
        return res.status(200).send(`error:${err}`)
    }

}

const GetTranslate = (req, res) => {
    const { url } = req.body;

    const Scrape = {  price,
        title:'headling',
        description:'hello',
        date:new Date(),
        productStatus:'new',
        imageUrl:'https://images.pexels.com/photos/1590901/pexels-photo-1590901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }

    const newProduct = new Product({ url });
    res.json({ success: newProduct });
}

module.exports = {
    GetTranslate,
    updateProduct,
    addProduct,
    deleteProduct,
    readProduct
}