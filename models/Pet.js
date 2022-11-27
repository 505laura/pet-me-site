const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Pet extends Model {}

Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        species: {
            type: DataTypes.ENUM('Dog', 'Cat'),
            allowNull: false
        },
        name: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        breed: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        age: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        colour: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        sex: { 
            type: DataTypes.ENUM('Male', 'Female'),
            allowNull: false
        },
        desexed: { 
            type: DataTypes.ENUM('Y', 'N'),
            allowNull: false
        },
        description: { 
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pet',
        paranoid: true
    }
);

module.exports = Pet;