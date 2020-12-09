var express = require('express');
var router = express.Router();


const { authController: adminAuth } = require('../controllers/admin');
const { authController: retailAuth } = require('../controllers/retailUser');
const { authController: tradeAuth } = require('../controllers/tradeUser');

/* GET admin login page. */
router.get('/admin/login', adminAuth.getLogin);

/* Post admin login. */
router.post('/admin/login', adminAuth.postLogin);

/* GET retail user login page. */
router.get('/retail/login', retailAuth.getLogin);

/* Post retail user login. */
router.post('/retail/login', retailAuth.postLogin);

/* Get retail user signup page. */
router.get('/retail/signup', retailAuth.getSignup);

/* GET trade user login page. */
router.get('/trade/login', tradeAuth.getLogin);

/* Post trade user login. */
router.post('/trade/login', tradeAuth.postLogin);




module.exports = router;