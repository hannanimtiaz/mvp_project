const authController = require('./user/auth');
const projectController = require('./user/project');
const roomController = require('./user/room');


module.exports = {
    authController,
    projectController,
    roomController,
    getHome: function (req, res, next) {
        res.render('user/index');
    }
}