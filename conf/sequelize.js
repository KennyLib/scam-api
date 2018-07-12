const Sequelize = require('sequelize');
const config = require("../package.json").config;
const sequelize = new Sequelize(process.env.dblink);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
module.exports = () => {
    return sequelize
}