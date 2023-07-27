

const express = require('express');

const app = express();

app.use('/',(req, res, next) => {
    console.log('This always runs');
    next(); //allow middleware to continue to next middleware
});

app.use('/add-product', (req, res, next) => {
    console.log('middleware');
    res.send('<h1>Hello there, "Add Product" !</h1>');
});

app.use('/', (req, res, next) => {
    console.log('another middleware');
    res.send('<h1>Hello there!</h1>');
});


app.listen(3000);
