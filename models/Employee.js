const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Employee extends Model {
    async checkPassword(loginPw) {
        return bcrypt.compare(loginPw, this.password);
    }
}

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
            validate: {
                len: [8, 64]
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
            type: DataTypes.INTEGER,
            unique: true,
            // Optional
            allowNull: true
        },
    },
    {
        hooks: {
            beforeCreate: async (newEmployeeData) => {
                newEmployeeData.password = await bcrypt.hash(newEmployeeData.password, 10);
                return newEmployeeData;
            },
        },
        defaultScope: {
            attributes: {
                exclude: ['password']
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee'
    }
);
    
module.exports = Employee;