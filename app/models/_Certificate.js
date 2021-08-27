const { DataTypes, Model } = require('sequelize');
const db = require("../database/db");

class _Certificate extends Model {}

_Certificate.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    protocol: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    monitoring: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    }
}, {
    sequelize: db,
    modelName: 'certificate',
});
module.exports = _Certificate;