const express = require('express');
const app = express();
const phones = require('./phones.json');
const port = 5000;

app.get('/', (req, res) => {
    res.send('Look mama nodemon!!! Iphone server running');
});

app.get('/phones', (req, res) => {
    res.send(phones);
});

app.listen(port, () => {
    console.log(`Iphone server is running on port:${port}`);
});