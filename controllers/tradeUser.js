const authController = require('./tradeUser/auth');
const projectController = require('./tradeUser/project');

module.exports = {
    authController,
    projectController,
    getHome: function (req, res, next) {
        res.render('trade/index');
    }
}