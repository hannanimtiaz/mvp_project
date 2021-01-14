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

router.post('/createproductpost', productController.createProductPost);

router.get('/editproductget/:product_id', productController.editProductGet)

router.get('/editproductpost', productController.editProductPost)


module.exports = router
