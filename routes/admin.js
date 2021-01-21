var express = require('express');
var router = express.Router();

var auth = require('../middleware/auth')

const {
    getHome, productController } = require('../controllers/admin');

/* Get admin Home. */
router.get('/', getHome);

/* Get Product detail page. */
router.get('/products', productController.getProductsDetail)

/* Get Create Product page. */
router.get('/createproductget', productController.createProductGet)

/* Post Create Product details. */
router.post('/createproductpost', productController.createProductPost);

/* Get Edit Product page. */
router.get('/editproductget/:product_id', productController.editProductGet)

/* Post Edit Product details. */
router.post('/editproductpost', productController.editProductPost)

/* Post Delete Product. */
router.post('/deleteproduct', productController.postDeleteProduct)

module.exports = router
