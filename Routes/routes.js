const router = require('express').Router();
const{getAllProducts,createProduct, getProductByID, updateProductByID}=require('../controllers/product')

router.get('/products', getAllProducts);
router.get('/products/:id', getProductByID);
router.post('/products',createProduct);
router.put('/products/:id',updateProductByID);

module.exports = router;