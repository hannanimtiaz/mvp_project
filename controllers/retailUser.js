const authController = require('./retailUser/auth');


module.exports = {
    authController,
    getHome: function (req, res, next) {
        res.render('admin/index');
    }
}