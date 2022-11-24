const sequelize = require('../config/connection');
const seedEmployee = require('./employeeData');
const seedPet = require('./petData');
const seedUser = require('./userData');
const seedAppointment = require('./appointmentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedEmployee();

  await seedPet();

  await seedUser();

  await seedAppointment();

  process.exit(0);
};

seedAll();
