const express = require('express');

const app = express();

const router = require('./routes/productRouter');

app.use(express.static('public'));

app.use(express.json());

app.use('/api/products', router);

app.listen(4000);