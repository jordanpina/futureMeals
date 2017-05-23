const Sequelize = require('sequelize');
const elephant = require('../internal/databaseInternals');
const User = require('./userTable');

const url = elephant.uri //|| "postgres://postgres:5432@localhost/postgres";

const sequelize = new Sequelize(elephant.uri);

module.exports = sequelize;
