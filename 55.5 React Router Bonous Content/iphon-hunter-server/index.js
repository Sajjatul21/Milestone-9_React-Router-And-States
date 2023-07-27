const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Iphone server running');
});

app.listen(port, () => {
    console.log(`Iphone server is running on port:${port}`);
});