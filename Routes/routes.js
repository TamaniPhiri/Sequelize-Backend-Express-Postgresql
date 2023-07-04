const router = require('express').Router();
const{getAllProducts,createProduct, getProductByID, updateProductByID, deleteProductByID}=require('../controllers/product')

router.get('/products', getAllProducts);
router.get('/products/:id', getProductByID);
router.post('/products',createProduct);
router.put('/products/:id',updateProductByID);
router.delete('/products/:id',deleteProductByID);

module.exports = router;