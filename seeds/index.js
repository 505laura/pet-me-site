const sequelize = require('../config/connection');
const seedEmployee = require('./employeeData');
const seedPet = require('./petData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedEmployee();

  await seedPet();

  process.exit(0);
};

seedAll();
