const router = require('express').Router();
const { Appointment, Pet, User } = require('../../models');

router.get('/', async(req, res) => {
    const appointments = await Appointment.findAll({include: [Pet, User]});
    res.json(appointments);
});

router.get('/:id', async(req, res) => {
    const appointment = await Appointment.findOne({
        where: {id: req.params.id},
        include: [Pet, User]
    }).catch(() => null);
    if (appointment == null) {
        return res.status(404).send({
            message: 'Appointment does not exist.'
        });
    }
    res.json(appointment);
});

router.post('/', async(req, res) => {
    const {date, pet_id, user_id} = req.body;
    const appointment = await Appointment.create({date, pet_id, user_id});
    const id = appointment.getDataValue('id');
    res.json({appointment_id: id});
});

router.put('/:id', async(req, res) => {
    const {date, pet_id, user_id} = req.body;
    await Appointment.update({date, pet_id, user_id}, {where: {id: req.params.id}});
    res.json({success: true});
});

router.delete('/:id', async(req, res) => {
    await Appointment.destroy({where: {id: req.params.id}});
    res.json({success: true});
});

module.exports = router;