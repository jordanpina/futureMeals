const sequelize = require('./database');
const Sequelize = require('sequelize');

const  User = sequelize.define('user', {
        _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        username: { type: Sequelize.TEXT },
        password: { type: Sequelize.TEXT },
        healthLabel: { type: Sequelize.ARRAY(Sequelize.TEXT) },
    })
User.sync().then(() => {console.log('user table made')});

module.exports = User;