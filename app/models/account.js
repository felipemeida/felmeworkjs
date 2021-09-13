const {Model, DataTypes} = require('sequelize');
const db = require("../database/db");

class Account extends Model {}

Account.init({
    name: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING
    },
    count: {
        type: DataTypes.INTEGER
    },
    money: {
        type: DataTypes.FLOAT
    }
}, {
    sequelize: db,
    modelName: 'Account',
});
module.exports = Account;