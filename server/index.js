const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// const userRouter = require('./routes/users.route');
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/api/users', userRouter)

app.get('/api/translate', (req, res) => {
    const { url } = req.body;
    const newProduct = new Product({url});
    res.json({ success: newProduct });

})
app.use('/api',productRoute)
console.log('hello');


app.listen(process.env.PORT || 5000, () => {
    console.log(`application start at ${process.env.PORT || 5000}`)
})


