const express = require('express');

const app = express();

const router = require('./routes/productRouter');

app.use('/api/products', router);

app.listen(4000);