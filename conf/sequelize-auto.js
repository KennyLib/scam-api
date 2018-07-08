var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto(
    'scamDB', 'scam', 'Xx521314', {
        host: '121.42.186.91',
        dialect: 'mysql',
        directory: './models', // prevents the program from writing to disk
        port: '3306',
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