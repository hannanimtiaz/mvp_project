var RetailModel = require('../../models/retailUser');


exports.getLogin = function (req, res, next) {
    res.render('login', { type: 'Retail User' });
}

exports.getSignup = function (req, res, next) {
    res.render('signupRetail');
}

exports.postLogin = async function (req, res, next) {
    const { email, password } = req.body;

    let retail = await RetailModel.findOne({});

    if (!retail) {
        return res.json({
            status: 'error',
            msg: 'User not found',
            data: null
        });
    }

    if (retail.email == email.toLowerCase() &&
        retail.password == password) {

        req.session.type = 'retail';
        req.session._id = retail._id;
        req.session.email = retail.email;

        return res.json({
            status: 'success',
            msg: 'Successfully logged In',
            data: null,
            redirect: '/retail/'
        });

    } else {
        res.json({
            status: 'error',
            msg: 'Invalid email/password',
            data: null
        });
    }
}