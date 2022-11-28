const router = require('express').Router();
const { Appointment, Pet, User } = require("../../models");

router.get('/', async(req, res) => {
    Appointment.findAll({
        attributes: ["id", "pet_id", "user_id"],
        include: [
          {
            model: Pet,
            attributes: ["id", "species", "name", "breed", "age", "colour", "sex", "desexed", "description", "added"]
          },
          {
            model: User,
            attributes: ["email", "firstName", "lastName"]

          },
        ],
      })
        .then((data) => res.json(data))
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Appointment.findOne({
        where: {
            id: req.params.id
        },
        attributes: ["id", "pet_id", "user_id"],
        include: [
          {
            model: Pet,
            attributes: ["id", "species", "name", "breed", "age", "colour", "sex", "desexed", "description", "added"],
          },
          {
            model: User,
            attributes: ["email", "firstName", "lastName"]

          },
        ],
      })
        .then((data) => res.json(data))
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Appointment.create({
        pet_id: req.body.pet_id,
        user_id: req.body.user_id
      })
        .then((data) => res.json(data))
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Appointment.update(req.body, {
        where: {
          id: req.params.id,
        },
      })
        .then((data) => {
          if (!data[0]) {
            res.status(404).json({ message: 'No appointment found with the id' });
            return;
          }
          res.json(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Appointment.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then((data) => {
          if (!data) {
            res.status(404).json({ message: 'No appointment found with the id' });
            return;
          }
          res.json(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;