const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// const userRouter = require('./routes/users.route');
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/api/users', userRouter)
app.get('/', (req, res) => {
    res.json({ success: { id: 1, email: 'asfasf@asfasf.com' } })
})
app.listen(process.env.PORT || 5000, () => {
    console.log(`application start at ${process.env.PORT || 5000}`)
})
