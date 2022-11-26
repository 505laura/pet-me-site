const { User } = require('../models');

const userData = [
    {
        email: 'user1@hotmail.com',
        password: '1q2w3e4r5t',
        firstName: 'David',
        lastName: 'Cope',
        gender: 'Male',
        telephone: 410000020
    },
    {
        email: 'user2@hotmail.com',
        password: '12345678',
        firstName: 'Sarah',
        lastName: 'Allgood',
        gender: 'Female'
    },
    {
        email: 'user3@hotmail.com',
        password: '97654321',
        firstName: 'Marry',
        lastName: 'Lock',
        gender: 'Female'
    },
    {
        email: 'user4@hotmail.com',
        password: '1324354678xs',
        firstName: 'Amy Lisa',
        lastName: 'Sunny',
        gender: 'Female'
    }
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;

