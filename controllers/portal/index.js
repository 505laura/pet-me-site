const router = require('express').Router();

const employeeRoutes = require('./employeeRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/employees', employeeRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
    res.render('portal/login', {
        layout: 'portal'
    });
});


module.exports = router;