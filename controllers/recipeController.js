const User = require('../models/userTable');
const Recipe = require('../models/recipeTable');
const User_Recipe = require('../models/userRecipeTable');

const recipeController = {};
//req.body should have: recipe, username, day
recipeController.saveRecipe = (req, res, next) => {
    //day for recipe to be saved
    var day = req.body.day;
    //username (being passed as a prop to recipe component), to be updated to User ID at some point
    var username = req.body.username;
    //recipe is nested within recipe in the API response
    var recipe = req.body.recipe.recipe;
    if (!day || !username || !recipe) res.status(400).send('please send day, username, and recipe');
    else {
        Recipe.findOrCreate({
            where: {
                img: recipe.image,
                title: recipe.label,
                url: recipe.url,
                yield: recipe.yield,
                healthLabel: recipe.healthLabels,
                ingredients: recipe.ingredientLines
            }
        }).spread((recipe, created) => {
            User.find({ username: username }).then((user) => {
                User_Recipe.create(
                    {
                        user_id: user._id,
                        recipe_id: recipe._id,
                        date: day
                    })
                    .then(() => {
                        res.status(200).send('Recipe added!')
                    })
            })
        })
    }
}
recipeController.getRecipes = (req, res, next) => {
    //day for recipe to be saved
    var day = req.query.day;
    //username (being passed as a prop to recipe component), to be updated to User ID at some point
    var username = req.query.username;
    //recipe is nested within recipe in the API response
    if (!day || !username) res.status(400).send('please select a valid day');
    else {
        User.find({ username: username }).then((foundUser) => {
            User_Recipe.findAll({
                where: {
                    user_id: foundUser._id,
                    date: day
                }
            }).then((recipes) => {
                console.log("FOUND RECIPES", recipes)
                res.status(200).send('Recipes found!')
            })
        })
    }
}

module.exports = recipeController;