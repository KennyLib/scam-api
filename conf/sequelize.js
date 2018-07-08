const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.npm_package_config_dbtype + "://" + process.env.npm_package_config_dblogin + ":" + process.env.npm_package_config_dbpwd + "@" + process.env.npm_package_config_dbhost + ":" + process.env.npm_package_config_dbport + "/" + process.env.npm_package_config_dbname + "");

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