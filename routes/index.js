var express = require('express');
var router = express.Router();

var auth = require('../middleware/auth')

var authRouter = require('./auth');
var adminRouter = require('./admin');
var userRouter = require('./user');



router.use('/auth', auth.isNotLoggedIn, authRouter);

router.use('/admin', auth.isAdmin, adminRouter);

router.use('/user', auth.isUser, userRouter);

router.get('/', auth.isNotLoggedIn, (req, res) => {
  res.render('index', {title:"Express"});
});

/* GET Logout route. */
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});


module.exports = router;
