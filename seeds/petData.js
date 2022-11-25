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
    "name": "Snowpaw",
    "breed": "Tabby",
    "age": 2,
    "colour": "Tabby",
    "sex": "Male",
    "desexed": "Y",
    "description": "A lovely tabby cat is looking for a safe home 🐱",
    "added": "2022-11-23 20:55:28"
  },
  {
    "species": "Cat",
    "name": "Fluffy",
    "breed": "British Short Hair",
    "age": 4,
    "colour": "Grey",
    "sex": "Male",
    "desexed": "Y",
    "description": "A well-behaved handsome cat is looking for him a forever  home 🐱",
    "added": "2022-11-24 20:55:28"
  },
  {
    "species": "Dog",
    "name": "Felix",
    "breed": "Border Collie",
    "age": 6,
    "colour": "White and Brown",
    "sex": "Male",
    "desexed": "Y",
    "description": "A beautiful, clever and fast learning dog is looking for a loving home 🐱",
    "added": "2022-11-24 20:55:28"
  },
];

const seedPet = () => Pet.bulkCreate(petdata);

module.exports = seedPet;

