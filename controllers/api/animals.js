const router = require('express').Router();
const { Pet } = require('../../models');

router.get('/', async(req, res) => {
    const pets = await Pet.findAll();
    res.json(pets);
});

router.get('/:id', async(req, res) => {
    const pet = await Pet.findOne({
        where: {id: req.params.id},
        // include: []
    });
    res.json(pet);
});

router.post('/', async(req, res) => {
    const {species, name, breed, age, colour, sex, desexed, description} = req.body;
    const pet = await Pet.create({species, name, breed, age, colour, sex, desexed, description});
    const id = pet.getDataValue('id');
    res.json({pet_id: id});
});

router.put('/:id', async(req, res) => {
    const {species, name, breed, age, colour, sex, desexed, description} = req.body;
    const result = await Pet.update({species, name, breed, age, colour, sex, desexed, description}, {where: {id: req.params.id}});
    res.json({success: true});
});

router.delete('/:id', async(req, res) => {
    const result = await Pet.destroy({where: {id: req.params.id}});
    res.json({success: true});
});

module.exports = router;