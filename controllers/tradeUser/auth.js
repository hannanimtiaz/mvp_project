var TradeModel = require('../../models/tradeUser');


exports.getLogin = function (req, res, next) {
    res.render('login', { type: 'Trade User' });
}

exports.postLogin = async function (req, res, next) {
    const { email, password } = req.body;

    let trader = await TradeModel.findOne({});

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