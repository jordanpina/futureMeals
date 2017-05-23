const User = require('../models/userTable');
const Recipe = require('../models/recipeTable');
const User_Recipe = require('../models/userRecipeTable');


const recipeController = {};
//FUCKING USE THIS ONE
//POST REQUEST FROM RECIPE:
//parse req.body 
//req.body should have: recipe, username, day
//req.body.recipe has shit we dont like. must parse.
recipeController.saveRecipe = (req, res, next) => {
    // let day = req.body.day;
    // let username = req.body.username;
    // let recipe = req.body.recipe.recipe;
    // console.log(recipe)
    // if(!day || !username || !recipe) res.status(400).send('please send day username AND recipe');
    // else{
    //     console.log('in saveRecipe have day username and recipe');
    //     let label = recipe.label;
    //     let image = recipe.image;
    //     let url = recipe.url;
    //     let _yield = recipe.yield;//yield is a reserved word in javascript
    //     let healthLabels = recipe.healthLabels;
    //     let ingredientLines = recipe.ingredientLines;
    //     // console.log(label)
    //     db.conn.query(`INSERT INTO ${username} ("day", "label", "image", "url", "yield", "healthLabels", "ingredientLines")
    //                    VALUES ('${day}', '${label}', '${image}', '${url}', '${_yield}', ARRAY['${healthLabels}'], ARRAY['${ingredientLines}']);`,
    //                (error, result) => {
    //                    if(error) res.status(400).send(error);
    //                    else res.status(200).send(`saved to table ${username}`);
    //                });
    // }
}

module.exports = recipeController;