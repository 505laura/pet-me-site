const sequelize = require('../config/connection');
const { Employee } = require('../models');
const { Pet } = require('../models');

const employeeData = require('./employeeData.json');
const petData = require('./petData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Employee.bulkCreate(employeeData, {
    individualHooks: true,
    returning: true,
  });

  await Pet.bulkCreate(petData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
