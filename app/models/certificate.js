const {Model, DataTypes} = require('sequelize');
const db = require("../database/db");

class Certificate extends Model {
}

Certificate.init({
    protocol: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    count: {
        type: DataTypes.INTEGER
    },
    monitoring: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize: db,
    modelName: 'Certificate',
});

module.exports = Certificate;