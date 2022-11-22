const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Employee extends Model {}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(64),
            set(value) {
                this.setDataValue('password', hash(value));
            },
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM('Male', 'Female', 'Other', 'None'),
            allowNull: false
        },
        telephone: {
            // Add ability to add country code
            type: DataTypes.NUMBER,
            unique: true,
            // Optional
            allowNull: true
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = Employee;