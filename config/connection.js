const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
const dbConfig =  {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
    logging: false
};

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, dbConfig);
}

module.exports = sequelize;