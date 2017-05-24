const sequelize = require('./database');
const Sequelize = require('sequelize');
const User = require('./userTable'); 
const Recipe = require('./recipeTable');

var User_Recipe = sequelize.define('user_recipe', {
        _id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: User,
                key: '_id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        recipe_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Recipe,
                key: '_id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        date: { type: Sequelize.DATEONLY }
    })

    User_Recipe.sync().then(() => {console.log("user_recipe table created")});
    
module.exports = User_Recipe;