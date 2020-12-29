var express = require('express');
var router = express.Router();

var auth = require('../middleware/auth')

const {
    getHome, productController } = require('../controllers/admin');

/* Get admin Home. */
router.get('/', getHome);

/* Get Product detail page. */
router.get('/productdetail', productController.getProductsDetail)

/* Get Create Product page. */
router.get('/createproductget', productController.createProductGet)

router.post('/createproductpost', productController.createProductPost);

/* Get Show Product page. */
router.get('/showproductsget', productController.showProductsget)


module.exports = router
