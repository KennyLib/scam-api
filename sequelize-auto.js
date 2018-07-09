var SequelizeAuto = require('sequelize-auto')
const config = require("./package.json").config;

var auto = new SequelizeAuto(
    config.dbname,
    config.dblogin, 
    config.dbpwd, {
        host: config.dbhost,
        dialect: config.dbtype,
        directory: './models', // prevents the program from writing to disk
        port: config.dbport,
        additional: {
            timestamps: false
        }
    }
)
auto.run(function (err) {
    if (err) throw err;

    console.log(auto.tables); // table list
    console.log(auto.foreignKeys); // foreign key list
});