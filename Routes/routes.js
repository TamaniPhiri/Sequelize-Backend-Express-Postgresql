const router = require('express').Router();
const{getAllProducts,createProduct,updateProduct}=require('../controllers/product')

router.get('/products', getAllProducts);
router.post('/products',createProduct);
router.put('/products/:id',updateProduct);

module.exports = router;