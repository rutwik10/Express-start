

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('hello');
    next(); //allow middleware to continue to next middleware
});

app.use((req, res, next) => {
    console.log('hello again');
    res.send('<h1>Hello there!</h1>');
});


app.listen(3000);
