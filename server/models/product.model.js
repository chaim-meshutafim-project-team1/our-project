const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    url: {
        type: String,
        required: true,
        trim: true
    },
    
})


module.exports = {
    Product
}