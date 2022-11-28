const { Pet } = require('../../models');

const router = require('express').Router();
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const pets = await Pet.findAll().then((pets) => pets.map((pet) => pet.dataValues));
        res.render('homepage', {data: {pets}, logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

module.exports = router;
