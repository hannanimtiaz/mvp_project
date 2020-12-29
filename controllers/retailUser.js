const authController = require('./retailUser/auth');
const projectController = require('./retailUser/project');



module.exports = {
    authController,
    projectController,
    getHome: function (req, res, next) {
        res.render('retail/index');
    }
}