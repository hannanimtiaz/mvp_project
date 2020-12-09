var AdminModel = require('../../models/admin');


exports.getLogin = function (req, res, next) {
    res.render('login', { type: 'Admin' });
}

exports.postLogin = async function (req, res, next) {
    const { email, password } = req.body;

    let admin = await AdminModel.findOne({});

    if (!admin) {
        return res.json({
            status: 'error',
            msg: 'Admin not found',
            data: null
        });
    }

    if (admin.email == email.toLowerCase() &&
        admin.password == password) {

        req.session.type = 'admin';
        req.session._id = admin._id;
        req.session.email = admin.email;

        return res.json({
            status: 'success',
            msg: 'Successfully logged In',
            data: null,
            redirect: '/admin/'
        });

    } else {
        res.json({
            status: 'error',
            msg: 'Invalid email/password',
            data: null
        });
    }
}