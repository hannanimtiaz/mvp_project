var express = require('express');
var router = express.Router();

const { authController: adminAuth } = require('../controllers/admin');
const { authController: userAuth } = require('../controllers/user');

/* GET admin login page. */
router.get('/admin/login', adminAuth.getLogin);

/* Post admin login. */
router.post('/admin/login', adminAuth.postLogin);

/* GET User login page. */
router.get('/user/login', userAuth.getLogin);

/* Post User login. */
router.post('/user/login', userAuth.postLogin);

/* Get User signup page. */
router.get('/user/signup', userAuth.getSignup);

/* Post User signup page. */
router.post('/user/signup', userAuth.postSignup);

module.exports = router;