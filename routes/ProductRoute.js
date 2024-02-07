const express = require('express');
const productController = require('../controller/ProductController');

const router = express.Router();

router.get('/find-all', productController.findAllProducts);
module.exports = router;
