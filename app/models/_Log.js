const { DataTypes, Model } = require('sequelize');
const db = require("../database/db");

class _Log extends Model {}

_Log.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    info: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tags: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: db,
    modelName: 'log',
});
module.exports = _Log;