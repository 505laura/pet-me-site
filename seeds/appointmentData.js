const { Appointment } = require('../models');

const appointmentdata = [
  {
    "date": "2022-11-23 20:45:28",
    "pet_id": 1,
    "user_id": 1
  },
  {
    "date": "2022-11-24 20:45:28",
    "pet_id": 2,
    "user_id": 1
  },
  {
    "date": "2022-11-24 20:45:28",
    "pet_id": 2,
    "user_id": 2
  },
  {
    "date": "2022-11-24 20:45:28",
    "pet_id": 3,
    "user_id": 2
  }
];

const seedAppointment = () => Appointment.bulkCreate(appointmentdata);

module.exports = seedAppointment;

