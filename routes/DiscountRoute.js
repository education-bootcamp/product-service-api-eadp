const express = require('express');
const discountController = require('../controller/DiscountController');

const router = express.Router();

router.get('/find-all', discountController.loadAllData);
router.post('/create', discountController.saveData);
module.exports = router;
