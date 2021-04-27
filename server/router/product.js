const express = require('express')
const productController = require('../controller/productController')


const router = express.Router()



router.get('/translate',productController.GetTranslate)




module.exports = router
