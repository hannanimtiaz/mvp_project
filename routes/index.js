var express = require('express');
var router = express.Router();

var auth = require('../middleware/auth')

var authRouter = require('./auth');
var adminRouter = require('./admin');



router.use('/auth', auth.isNotLoggedIn, authRouter);

router.use('/admin', auth.isAdmin, adminRouter);

router.get('/', auth.isNotLoggedIn, (req, res) => {
  res.render('index', {title:"Express"});
});


/* GET Logout route. */
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});


module.exports = router;
