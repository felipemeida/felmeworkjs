const {Model, DataTypes} = require('sequelize');
const db = require("../database/db");

class Log extends Model {
}

Log.init({
    message: {
        type: DataTypes.STRING
    },
    info: {
        type: DataTypes.STRING
    },
    tags: {
        type: DataTypes.STRING
    }
}, {
    sequelize: db,
    modelName: 'Log',
});
module.exports = Log;