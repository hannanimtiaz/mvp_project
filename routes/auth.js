var express = require('express');
var router = express.Router();

const { authController: adminAuth } = require('../controllers/admin');
const { authController: tradeAuth } = require('../controllers/tradeUser');

/* GET admin login page. */
router.get('/admin/login', adminAuth.getLogin);

/* Post admin login. */
router.post('/admin/login', adminAuth.postLogin);

/* GET trade user login page. */
router.get('/trade/login', tradeAuth.getLogin);

/* Post trade user login. */
router.post('/trade/login', tradeAuth.postLogin);

/* Get trade user signup page. */
router.get('/trade/signup', tradeAuth.getSignup);

/* Post trade user signup page. */
router.post('/trade/signup', tradeAuth.postSignup);

module.exports = router;