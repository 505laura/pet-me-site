const { Employee } = require('../models');

const employeeData = [
    {
        email: 'staff1@hotmail.com',
        password: 'password12345',
        firstName: 'John',
        lastName: 'Smith',
        gender: 'Male',
        telephone: 410000001
    },
    {
        email: 'staff2@hotmail.com',
        password: 'password12345',
        firstName: 'Jane',
        lastName: 'Wright',
        gender: 'Female'
    }
];

const seedEmployee = () => Employee.bulkCreate(employeeData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedEmployee;
