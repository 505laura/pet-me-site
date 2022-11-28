const router = require('express').Router();
const { Employee } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const employeeData = await Employee.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });

        const employees = employeeData.map((employee) => employee.get({ plain: true }));

        res.render('portal/hello', {
            employees,
            logged_in: req.session.logged_in,
            layout: 'portal'
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/portal/hello3');
        return;
    }

    res.render('portal/hello2', {
        layout: 'portal'
    });
});

module.exports = router;
