const router = require('express').Router();
const{getAllProducts,createProduct}=require('../controllers/product')

router.get('/products', getAllProducts);
router.post('/products',createProduct);

module.exports = router;