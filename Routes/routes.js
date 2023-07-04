const router = require('express').Router();
const{getAllProducts,createProduct,updateProduct, getProductByID}=require('../controllers/product')

router.get('/products', getAllProducts);
router.get('/products/:id', getProductByID);
router.post('/products',createProduct);
router.put('/products/:id',updateProduct);

module.exports = router;