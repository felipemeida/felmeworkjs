const { Sequelize } = require('sequelize');
const config = require("config");

const db = new Sequelize(config.get('db.dbname'), config.get('db.user'), config.get('db.password'), {
    host: config.get('db.host'),
    dialect: 'mysql',
    logging: getLogging(),
});

function getLogging(){
    if (config.get("db.options.logging")) {
        return function (message) {
            console.log(message);
        }
    } else {
        return false;
    }
}

module.exports = db;