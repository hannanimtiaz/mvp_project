const authController = require('./admin/auth');


module.exports = {
    authController,
    getHome: function (req, res, next) {
        res.render('admin/index');
    }
}