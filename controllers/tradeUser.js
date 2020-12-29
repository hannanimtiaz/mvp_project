const authController = require('./tradeUser/auth');


module.exports = {
    authController,
    getHome: function (req, res, next) {
        res.render('trade/index');
    }
}