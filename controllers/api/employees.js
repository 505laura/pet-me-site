const router = require('express').Router();
const { Employee } = require('../../models');

router.get('/:id', async(req, res) => {
    // if (!req.session.logged_in) { // Employee is not logged in
    //     return res.status(404).end();
    // }
    // if (req.params.id !== req.session.user_id) { // Employee is not logged in as the employee they requested data about
    //     return res.status(403).send({
    //         message: 'Not for you'
    //     });
    // }
    // Employee is logged in as the right user
    const employee = await Employee.findOne({
        where: {id: req.params.id},
    }).catch(() => null);
    if (employee == null) {
        return res.status(404).send({
            message: 'Employee does not exist.'
        });
    }
    delete employee.dataValues.password;
    res.json(employee);
});
    
router.post('/', async(req, res) => {
    const {email, password, firstName, lastName, gender, telephone} = req.body;
    const employee = await Employee.create({email, password, firstName, lastName, gender, telephone});
    const id = employee.getDataValue('id');
    res.json({employee_id: id});
    // add code for if employee already exists
});
    
router.put('/:id', async(req, res) => {
    // if (!req.session.logged_in) { // User is not logged in
    //     return res.status(404).end();
    // }
    // if (req.params.id !== req.session.user_id) { // User is not logged in as the user they want to update
    //     return res.status(403).send({
    //         message: 'Not for you'
    //     });
    // }
    const {email, password, firstName, lastName, gender, telephone} = req.body;
    await Employee.update({email, password, firstName, lastName, gender, telephone}, {where: {id: req.params.id}});
    res.json({success: true});
});
    
router.delete('/:id', async(req, res) => {
    // if (!req.session.logged_in) { // User is not logged in
    //     return res.status(404).end();
    // }
    // if (req.params.id !== req.session.user_id) { // User is not logged in as the user they want deleted
    //     return res.status(403).send({
    //         message: 'Not for you'
    //     });
    // }
    await Employee.destroy({where: {id: req.params.id}});
    res.json({success: true});
});

router.post('/login', async (req, res) => {
    try {
        const employeeData = await Employee.findOne({ where: { email: req.body.email } });

        if (!employeeData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await employeeData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.employee_id = employeeData.id;
            req.session.logged_in = true;
            res.json({ employee: employeeData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;

