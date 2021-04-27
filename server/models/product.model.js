const mongoose = require('mongoose')
validator = require('validator');

const Product = mongoose.model('Product', {
    url: {
        type: String,
        required: true,
        trim: true,
        // validate(value){  need to check url validity
        //     if (!validator.isUrl(value, ["he-IL"]))
		// 			throw new Error(`${value} is not a url`);
        // }
    },
    productID:{
        type: String,
        unique:true,
        require:true,
    },
    image:{
        type:String,
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
    lastUpdate:{//date
        type:Date,

    },
    productState:{ //status
        type:String,
    }
})


module.exports = {
    Product
}