const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Pet = require('./Pet.js');
const User = require('./User.js');

class Appointment extends Model {}

Appointment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

Appointment.belongsTo(Pet);
Pet.hasMany(Appointment);

Appointment.belongsTo(User);
User.hasMany(Appointment);

module.exports = Appointment;