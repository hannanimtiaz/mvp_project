const { body, validationResult, oneOf, check } = require('express-validator');

const { ifErrors } = require('./helper');

const RetailModel = require('../models/retailUser')

async function retailExists(email) {
    let retail = await RetailModel.findOne({ email });
    console.log('retail: ', retail);
    return admin ? true : false;
}

exports.createRetail = [
    check('password').exists(),
    check('email').isEmail().custom(async (value, { req }) => {
        if (await retailExists(value))
            return Promise.reject('User already exists');
    }),
    ifErrors
]