const router = require('express').Router();
const { User } = require('../../models');

router.get('/:id', async(req, res) => {
    // if (!req.session.logged_in) { // User is not logged in
    //     return res.status(404).end();
    // }
    // if (req.params.id !== req.session.user_id) { // User is not logged in as the user they requested data about
    //     return res.status(403).send({
    //         message: 'Not for you'
    //     });
    // }
    // User is logged in as the right user
    const user = await User.findOne({
        where: {id: req.params.id},
    }).catch(() => null);
    if (user == null) {
        return res.status(404).send({
            message: 'User does not exist.'
        });
    }
    res.json(user);
});

router.post('/', async(req, res) => {
    try {
        const {email, password, firstName, lastName, gender, telephone} = req.body;
        const user = await User.create({email, password, firstName, lastName, gender, telephone});
        const id = user.getDataValue('id');
        return res.json({user_id: id});
    } catch(e) {
        console.error(e);
        return res.status(500).send('Something went wrong!');
    }
    // add code for if user already exists
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
    await User.update({email, password, firstName, lastName, gender, telephone}, {where: {id: req.params.id}});
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
    await User.destroy({where: {id: req.params.id}});
    res.json({success: true});
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email }, attributes: {include: ['password']}  });
        
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        console.error(err);
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