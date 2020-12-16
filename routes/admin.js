var express = require('express');
var router = express.Router();


const {
    getHome, productController } = require('../controllers/admin');


/* Get admin Home. */
router.get('/', getHome);

router.get('/createProduct', productController.createProduct)

module.exports = router
