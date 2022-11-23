const { Pet } = require('../models');

const petdata = [
  {
    "species": "Dog",
    "name": "Waffle",
    "breed": "Maltese",
    "age": 1,
    "colour": "Black & White",
    "sex": "Female",
    "desexed": "N",
    "description": "A lovely maltese puppy is looking for a safe home 🐶",
    "added": "2022-11-23 20:45:28"
  },
  {
    "species": "Cat",
    "name": "Snowpawn",
    "breed": "Tabby",
    "age": 2,
    "colour": "Tabby",
    "sex": "Male",
    "desexed": "Y",
    "description": "A lovely tabby cat is looking for a safe home 🐱",
    "added": "2022-11-23 20:55:28"
  }
];

const seedPet = () => Pet.bulkCreate(petdata);

module.exports = seedPet;

