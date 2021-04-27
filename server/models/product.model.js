const mongoose = require('mongoose')
validator = require('validator');

const Product = mongoose.model('Product', {
    url: {
        type: String,
        required: true,
        trim: true,
        validate(value){
            if (!validator.isUrl(value, ["he-IL"]))
					throw new Error(`${value} is not a url`);
        }
    },
    productId:{
        type: String,
        unique:true,
        require:true,
    },
    image:{
        type:mongoose.SchemaTypes.Url,
        require:false,
        default:'https://assets.yad2.co.il/yad2site/y2assets/images/pages/feed/feed_img_placeholder.jpg'
    },
    price:{
        type:Number,
        require:false,
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        requrie:false
    },
    lastUpdate:{
        type:Date,

    },
    productState:{
        type:String,
    }
})


module.exports = {
    Product
}