const User = require('../models/userTable');
const Recipe = require('../models/recipeTable');
const User_Recipe = require('../models/userRecipeTable');

const dayController = {};

dayController.getRowsForDay = (req, res, next) => {
    // console.log('req.params: ',req.params)
    // let username = req.params.username;
    // let day = req.params.day;
    // db.conn.query(`SELECT * FROM ${username} WHERE day = '${day}';`, 
    //     (error, result) => {
    //         console.log(result)
    //         if (error) res.status(400).send(error);
    //         else res.status(200).send(result.rows);
    //     })
}

module.exports = dayController;