const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/portal/login');
    } else {
        next();
    }
};

module.exports = withAuth;
