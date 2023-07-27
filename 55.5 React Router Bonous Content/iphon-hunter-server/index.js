const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Look mama nodemon!!! Iphone server running');
});

app.get('/phones', (req, res) => {
    res.send('Phone data is coming soon!');
});

app.listen(port, () => {
    console.log(`Iphone server is running on port:${port}`);
});