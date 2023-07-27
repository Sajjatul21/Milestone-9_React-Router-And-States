const express = require('express');
const app = express();
const cors = require('cors');
const phones = require('./phones.json');
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Look mama nodemon!!! Iphone server running');
});

app.get('/phones', (req, res) => {
    res.send(phones);
});

app.get('/phones/:id', (req, res) => {
    // const id = (req.params.id);
    const id = parseInt(req.params.id);  // data comes stringify convert it the number use parseInt
    console.log('Looking data for: ', id);

    const phone = phones.find(ph => ph.id === id) || {};
    res.send(phone);
});

app.listen(port, () => {
    console.log(`Iphone server is running on port:${port}`);
});

