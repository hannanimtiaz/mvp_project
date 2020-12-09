
function redirectUrl(type) {
    console.log('type: ', type);
    if (type === 'admin')
        return '/admin';
    if (type === 'retail')
        return '/retail';
    if (type === 'trade')
        return '/trade';

    return '/';

}


module.exports.isAdmin = function (req, res, next) {
    if (req.session.type === 'admin') {
        next()
    }
    else {
        // res.redirect('/');
        res.redirect(redirectUrl(req.session.type))
    }
}

module.exports.isRetailer = function (req, res, next) {
    if (req.session.type === 'retail') {
        next()
    }
    else {
        // res.redirect('/');
        res.redirect(redirectUrl(req.session.type))
    }
}

module.exports.isTrader = async function (req, res, next) {
    if (req.session.type === 'trade') {


        let trader = await TradeModel.find({ _id: req.session._id })

        console.log('data: ', data);
        if (trader.status == 'APPROVED') {
            res.render('student/index', { data });
        } else {
            console.log('next called');
            next()
        }
    }
    else {
        // res.redirect('/');
        res.redirect(redirectUrl(req.session.type))
    }
}

module.exports.isNotLoggedIn = function (req, res, next) {
    if (!req.session.type) {
        next()
    }
    else {
        // res.redirect('/');
        res.redirect(redirectUrl(req.session.type))
    }
}