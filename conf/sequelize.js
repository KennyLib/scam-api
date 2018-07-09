const Sequelize = require('sequelize');
const config = require("../package.json").config;

const sequelize = new Sequelize(config.dbtype + "://" + config.dblogin + ":" + config.dbpwd + "@" + config.dbhost + ":" + config.dbport + "/" + config.dbname);

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