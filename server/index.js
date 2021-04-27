const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const productRoute = require('./router/product')

require("./db/mongoose");
const {Product} =require( './models/product.model')

// const userRouter = require('./routes/users.route');
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/api/users', userRouter)

app.use('/api',productRoute)



app.listen(process.env.PORT || 5000, () => {
    console.log(`application start at ${process.env.PORT || 5000}`)
})


// app.get('/api/translate', (req, res) => {
//     const { url } = req.body;
//     const newProduct = new Product({url});
//     res.json({ success: newProduct });
// })
