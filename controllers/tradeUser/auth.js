var TradeModel = require('../../models/tradeUser');


exports.getLogin = function (req, res, next) {
    res.render('login', { type: 'Trade' });
}

exports.getSignup = function (req, res, next) {
    res.render('signupTrade');
}

exports.postSignup = async function (req, res) {
    const { gender, firstname, lastname, email, password, phone_no, postal_code, DOB, companyName, businessNumber, tradingNumber, address, city, businessType, companyRole, companySize } = req.body;

    let isEmail = TradeModel.exists({ email: email })

    if (isEmail) {
        return res.json({
            msg: 'User already exists'
        })
    }
    else {
        let trade = await TradeModels.create({
            gender, firstname, lastname, email, password, phone_no, DOB, companyName, businessNumber, postal_code, tradingNumber, address, city, businessType, companyRole, companySize
        });
        console.log('trade: ', trade);

        if (trade) {
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

    let trader = await TradeModel.findOne({email});

    if (!trader) {
        return res.json({
            status: 'error',
            msg: 'User not found',
            data: null
        });
    }

    if (trader.email == email.toLowerCase() &&
        trader.password == password) {

        req.session.type = 'trade';
        req.session._id = trader._id;
        req.session.email = trader.email;

        return res.json({
            status: 'success',
            msg: 'Successfully logged In',
            data: null,
            redirect: '/trade/'
        });

    } else {
        res.json({
            status: 'error',
            msg: 'Invalid email/password',
            data: null
        });
    }
}