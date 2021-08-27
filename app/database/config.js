const fs = require('fs');
const config = require('config');

module.exports = {
    development: {
        username: config.get('db.user'),
        password: config.get('db.password'),
        database: config.get('db.dbname'),
        host: config.get('db.host'),
        port: 3306,
        dialect: config.get('db.dialect'),
        migrationStorage: "sequelize"
    },
    test: {
        username: config.get('db.user'),
        password: config.get('db.password'),
        database: config.get('db.dbname'),
        host: config.get('db.host'),
        port: 3306,
        dialect: config.get('db.dialect'),
        migrationStorage: "sequelize"
    },
    production: {
        username: config.get('db.user'),
        password: config.get('db.password'),
        database: config.get('db.dbname'),
        host: config.get('db.host'),
        port: 3306,
        dialect: config.get('db.dialect'),
        migrationStorage: "sequelize"
    }
};