const express = require('express');
const productCategoryController = require('../controller/ProductCategoryController');

const router = express.Router();

router.get('/find-all', productCategoryController.loadAllData);
router.post('/create', productCategoryController.saveData);
module.exports = router;
