const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

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
        },
        pet_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pet',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'appointment',
    }
);

module.exports = Appointment;