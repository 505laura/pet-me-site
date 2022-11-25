const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
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
            type: DataTypes.STRING,
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
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;

// possibly only need if making appointment:
// DOB
// address