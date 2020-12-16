const authController = require('./admin/auth');
const productController = require('./admin/products')


module.exports = {
    authController,
    productController,
    getHome: function (req, res, next) {
        res.render('admin/index');
    }
}