const authController = require('./user/auth');
const projectController = require('./user/project');
const roomController = require('./user/room');
const productController = require('./user/product');


module.exports = {
    authController,
    projectController,
    roomController,
    productController,
    getHome: function (req, res, next) {
        res.render('user/index');
    }
}