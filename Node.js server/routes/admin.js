const express = require('express');
const router = express.Router();
const path = require('path');
const adminController = require('../controllers/admin');


router.get('/add-product',adminController.getAddProduct);

router.get('/products',adminController.getProducts);
    
    
router.post('/add-product',adminController.getAddProduct);
router.get('/edit-product/:productId',adminController.getEditProduct);
  
module.exports = router;