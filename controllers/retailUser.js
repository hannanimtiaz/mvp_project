const authController = require('./retailUser/auth');
const projectController = require('./retailUser/project');
const roomController = require('./retailUser/room');




module.exports = {
    authController,
    projectController,
    roomController,
    getHome: function (req, res, next) {
        res.render('retail/index');
    }
}