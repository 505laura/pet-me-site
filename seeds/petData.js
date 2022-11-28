const { Pet } = require('../models');

const petData = [
    {
        species: 'Dog',
        name: 'Waffle',
        breed: 'Maltese',
        age: 1,
        colour: 'Black & White',
        sex: 'Female',
        desexed: 'N',
        description: 'A lovely maltese puppy is looking for a safe home 🐶',
        image: 'https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20190602_204319.jpg'
    },
    {
        species: 'Cat',
        name: 'Snowpaw',
        breed: 'Tabby',
        age: 2,
        colour: 'Tabby',
        sex: 'Male',
        desexed: 'Y',
        description: 'A lovely tabby cat is looking for a safe home 🐱',
        image: 'https://www.thesprucepets.com/thmb/xJhW6aZlQ1UDxcYnBT1OqsuvS_Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg'
    },
    {
        species: 'Cat',
        name: 'Fluffy',
        breed: 'British Short Hair',
        age: 4,
        colour: 'Grey',
        sex: 'Male',
        desexed: 'Y',
        description: 'A well-behaved handsome cat is looking for him a forever  home 🐱',
        image: 'https://www.rd.com/wp-content/uploads/2022/04/GettyImages-1358391524-e1650577897610.jpg'
    },
    {
        species: 'Dog',
        name: 'Felix',
        breed: 'Border Collie',
        age: 6,
        colour: 'White and Brown',
        sex: 'Male',
        desexed: 'Y',
        description: 'A beautiful, clever and fast learning dog is looking for a loving home 🐱',
        image: 'https://images.dog.ceo/breeds/rottweiler/n02106550_4910.jpg'
    },
];

const seedPet = () => Pet.bulkCreate(petData);

module.exports = seedPet;

