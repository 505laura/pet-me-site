const Employee = require('./Employee');
const Appointment = require('./Appointment');
const Pet = require('./Pet');
const User = require('./User');

Pet.hasMany(Appointment, {
    foreignKey: 'pet_id'
});

Appointment.belongsTo(Pet, {
    foreignKey: 'pet_id'
});

User.hasMany(Appointment, {
    foreignKey: 'user_id'
});

Appointment.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { Employee, Appointment, Pet, User };
