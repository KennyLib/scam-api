var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto(
    process.env.npm_package_config_dbname,
    process.env.npm_package_config_dblogin, 
    process.env.npm_package_config_dbpwd, {
        host: process.env.npm_package_config_dbhost,
        dialect: process.env.npm_package_config_dbtype,
        directory: './models', // prevents the program from writing to disk
        port: process.env.npm_package_config_dbport,
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