
const Sequelize = require("sequelize");
const CONFIG  = require('../config/config')
var rejectUnauthorized = CONFIG.app === 'server-dev' ? true : false;
const sequelize = new Sequelize(
    CONFIG.db_name,
    CONFIG.db_user, CONFIG.db_password,
  {
     operatorsAliases: 0, // change this to zero

    host: CONFIG.db_host,
    dialect: CONFIG.db_dialect,
    port: CONFIG.db_port,
    operatorsAliases: false,
    dialectOptions: {
        // useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true,
        timezone: '+07:00',
        ssl: { minVersion: 'TLSv1.2', rejectUnauthorized }
    },
    timezone: '+07:00', //for writing to database
    logging: false
  }
);

// var connection = mysql.createConnection({
//    host: 'gateway01.us-west-2.prod.aws.tidbcloud.com',
//    port: 4000,
//    user: '2rt75N4nng4PLWS.root',
//    password: 'Vq8p48D0zUYtx27S',
//    database: 'test',
//    ssl: {
//      minVersion: 'TLSv1.2',
//      rejectUnauthorized: true
//    }
//  });

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});
module.exports = {sequelize}