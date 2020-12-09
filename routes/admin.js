var express = require('express');
var router = express.Router();


const {
    getHome } = require('../controllers/admin');


/* Get admin Home. */
router.get('/', getHome);

module.exports = router
