
function redirectUrl(type) {
    console.log('type: ', type);
    if (type === 'admin')
        return '/admin';
    if (type === 'user')
        return '/user';

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

// module.exports.isuser = async function (req, res, next) {
    module.exports.isUser = function (req, res, next) {
    if (req.session.type === 'user') {


        // let user = await UserModel.find({ _id: req.session._id })

        // console.log('data: ', data);
        // if (user.status == 'APPROVED') {
        //     res.render('student/index', { data });
        // } else {
        //     console.log('next called');
            next()
        // }
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