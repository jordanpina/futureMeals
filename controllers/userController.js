const cookieController = require('../util/cookieController');
const User = require('../models/userTable');
const bcrypt = require('bcryptjs');


const userController = {};
//POST REQUEST FROM LOGIN:
//verify that username enters username and password
//verify that username exists in users table
//verify that password matches

function encryptPassword(plaintext) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plaintext, salt);
}

function decryptPassword(plaintext, hash) {
    return bcrypt.compareSync(plaintext, hash);
}

userController.verifyUser = (req, res, next) => {

    console.log('verifyUser');
    let username = req.body.username;
    let password = req.body.password;
    if (!username || !password) res.send('Please, enter username AND password');
    else {
        User.findOne({where: {username: username}})
            .then((user) => {
                if (user) {
                    console.log(password, user.password);   
                    if (decryptPassword(password, user.password)) {
                        return res.status(200).send();                       
                    }                 
                } 
                res.status(400).send();})
            .error((err) => {console.log(err); res.status(400).send();});
    }
}

//POST REQUEST FROM SIGNUP:
//checks if username already exists in users table
//if username already exists, don't create new user
userController.checkIfUsernameExists = (req, res, next) => {
    console.log('checkIfUsernameExists');
    let username = req.body.username;
    User.findOne({where: {username: username}})
        .then((user) => {
            if (user) {
                return res.status(400).send(`${username} exists already`);
            } else {
                next();}})
        .error((err) => {console.log(err); res.status(400).send();});
}

//POST REQUEST FROM SIGNUP (CONTINUED):
//adds username to users table
userController.addToUsersTable = (req, res, next) => {
    const hash = encryptPassword(req.body.password);
    User.upsert({username: req.body.username, password: hash, healthLabel: []})
        .then((created) => {created ? res.status(200).send() : res.status(400).send();})
        .error((err) => {console.log(err); res.status(400).send();});
    // let username = req.body.username;
    // let password = req.body.password;
    // let healthlabel = '';
    // //yeah Alyssa did this. goodluck figuring out why. sorrynotsorry
    // if (req.body.healthlabel) {
    //     healthlabel = req.body.healthlabel.reduce((res, curr, i) => {
    //         res += curr;
    //         if(i<req.body.healthlabel.length-1) res += ', ';
    //         return res;
    //     },'');
    // }
    // db.conn.query(`INSERT INTO users ("username", "password", "healthlabel")
    //                VALUES ('${username}', '${password}', ARRAY['${healthlabel}']);`,
    //                (error, result) => {
    //                    if(error) res.status(400).send(error);
    //                    else next();
    //                });
}
module.exports = userController;
