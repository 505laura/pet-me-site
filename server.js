const app = require('./app');
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
