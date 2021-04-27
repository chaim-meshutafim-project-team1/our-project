const express = require('express')
const productController = require('../controller/productController')


const router = express.Router()



router.post('/translate',productController.GetTranslate)

// router.delete('/delete/:id',productController.deleteProduct)

router.post('/add',productController.addProduct)

router.put('/update/:id',productController.updateProduct)

router.get('/product',productController.readProduct)


module.exports = router
