const express = require('express');

const controller = require('../controllers/productsController');

const router = express.Router();

router.get('/', controller.fetchProduct);

module.exports = router;