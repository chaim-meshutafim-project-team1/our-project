const {Product} = require('../models/product.model.js')


const addProduct = (req,res) =>{
    

}

const deleteProduct = (req,res) =>{


}


const updateProduct = (req,res) =>{



}
const readProduct = (req,res) =>{



}

const GetTranslate = (req,res) =>{
    const { url } = req.body;
    const newProduct = new Product({url});
    res.json({ success: newProduct });
}

module.exports = {
  GetTranslate
}