var TradeModel = require('../../models/tradeUser');


exports.getLogin = function (req, res, next) {
    res.render('login', { type: 'Trade' });
}

exports.getSignup = function (req, res, next) {
    res.render('signupTrade');
}

exports.postSignup = async function (req, res) {
    const { gender, firstname, lastname, email, password, phone_no, postal_code, DOB, companyName, businessNumber, tradingName, address, city, businessType, companyRole, companySize } = req.body;

    let isEmail = await TradeModel.exists({ email: email })

    if (isEmail) {
        return res.json({
            msg: 'Trade user already exists'
        })
    }
    else {
        let trade = await TradeModel.create({
            gender, firstname, lastname, email, password, phone_no, DOB, companyName, businessNumber, postal_code, tradingName, address, city, businessType, companyRole, companySize
        });
        console.log('trade: ', trade);

        if (trade) {
            return res.json({
                msg: 'Trade user created'
            });
        }
        else {
            return res.json({
                msg: 'Trade user not created'
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
            msg: 'Trade user not found',
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
            msg: 'Successfully logged in as Trade user',
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