const { Employee } = require('../models');

const employeedata = [
  {
    "email": "staff1@hotmail.com",
    "password": "password12345",
    "firstName": "John",
    "lastName": "Smith",
    "gender": "Male",
    "telephone": 410000001
  },
  {
    "email": "staff2@hotmail.com",
    "password": "password12345",
    "firstName": "Jane",
    "lastName": "Wright",
    "gender": "Female"
  }
];

const seedEmployee = () => Employee.bulkCreate(employeedata);

module.exports = seedEmployee;
