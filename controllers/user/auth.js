var UserModel = require('../../models/user');


exports.getLogin = function (req, res, next) {
    res.render('login', { type: 'user' });
}

exports.getSignup = function (req, res, next) {
    res.render('signup');
}

exports.postSignup = async function (req, res) {
    const { gender, firstname, lastname, email, password, phone_no, postal_code, DOB, companyName, businessNumber, tradingName, address, city, businessType, companyRole, companySize } = req.body;

    let isEmail = await UserModel.exists({ email: email })

    if (isEmail) {
        return res.json({
            msg: 'User already exists'
        })
    }
    else {
        let user = await UserModel.create({
            gender, firstname, lastname, email, password, phone_no, DOB, companyName, businessNumber, postal_code, tradingName, address, city, businessType, companyRole, companySize
        });
        console.log('user: ', user);

        if (user) {
            return res.json({
                msg: 'User created'
            });
        }
        else {
            return res.json({
                msg: 'User not created'
            });
        }
    }
}

exports.postLogin = async function (req, res, next) {
    const { email, password } = req.body;

    let user = await UserModel.findOne({email});

    if (!user) {
        return res.json({
            status: 'error',
            msg: 'User not found',
            data: null
        });
    }

    if (user.email == email.toLowerCase() &&
        user.password == password) {

        req.session.type = 'user';
        req.session._id = user._id;
        req.session.email = user.email;

        return res.json({
            status: 'success',
            msg: 'Successfully logged in as User',
            data: null,
            redirect: '/user/'
        });

    } else {
        res.json({
            status: 'error',
            msg: 'Invalid email/password',
            data: null
        });
    }
}