const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoute = require('./routes/product.route')
const Product = require('./models/product.model')

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:  true}))
dotenv.config();


// Accessing the value of the 'mongo_url' environment variable
const mongoURI = process.env.mongo_url;


app.use("/api/product", productRoute);


app.get('/', (req, res) => {
    res.send("Hello from Node API");
});


mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch((error) => {
        console.error('Connection to MongoDB failed:', error);
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});






