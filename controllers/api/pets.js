const router = require('express').Router();
const { Pet } = require("../../models")

router.get('/', async(req, res) => {
    Pet.findAll()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Product.findOne({
        where: {
          id: req.params.id,
        },
    })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No pet found with the id." });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Pet.create({
        species : req.params.species,
        name: req.params.name,
        breed: req.params.breed,
        age: req.params.age,
        colour: req.params.colour,
        sex: req.params.sex,
        desexed: req.params.desexed,
        description: req.params.description,
        added: req.params.added
      })
        .then((data) => res.json(data))
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Pet.update(req.body, {
        where: {
          id: req.params.id,
        },
      })
        .then((data) => {
          if (!data[0]) {
            res.status(404).json({ message: 'No pet found with the id' });
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
    Pet.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then((data) => {
          if (!data) {
            res.status(404).json({ message: 'No pet found with the id' });
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