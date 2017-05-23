const sequelize = require('./database');
const Sequelize = require('sequelize');

var Recipe = sequelize.define('recipe', {
        _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        img: { type: Sequelize.TEXT },
        title: { type: Sequelize.TEXT },
        url: { type: Sequelize.TEXT },
        yield: { type: Sequelize.INTEGER },
        healthLabel: { type: Sequelize.ARRAY(Sequelize.TEXT) },
        ingredients: { type: Sequelize.ARRAY(Sequelize.TEXT) },
    });

Recipe.sync().then(() => {console.log("recipe table created")});

module.exports = Recipe;