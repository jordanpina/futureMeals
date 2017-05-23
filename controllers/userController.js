 

const userController = {};
// require user model here later
// ^^^ didnt actually use sequilize. did it raw6969

//POST REQUEST FROM LOGIN:
//verify that username enters username and password
//verify that username exists in users table
//verify that password matches

userController.verifyUser = (req, res, next) => {
    // let username = req.body.username;
    // let password = req.body.password;
    // if (!username || !password) res.send('Please, enter username AND password');
    // else {
    //     db.conn.query(`SELECT username, password FROM users WHERE username = '${username}';`,
    //         (error, result) => {
    //             if (error) res.send(error);
    //             else if (!result.rows.length) res.status(400).send('no username found');
    //             else {
    //                 if (password === result.rows[0].password) {
    //                     res.status(200).send('password matches');
    //                 }
    //                 else {
    //                     res.status(400).send('wrong password');
    //                 }
    //         }
    //     });
    // }
}

//POST REQUEST FROM SIGNUP:
//checks if username already exists in users table
//if username already exists, don't create new user
userController.checkIfUsernameExists = (req, res, next) => {
    // let username = req.body.username;
    // db.conn.query(`SELECT username FROM users WHERE username = '${username}';`,
    //     (error, result) => {
    //         if (result.rows.length) res.status(400).send('username exists already');
    //         else next();
    //     });
}

//POST REQUEST FROM SIGNUP (CONTINUED):
//adds username to users table
userController.addToUsersTable = (req, res, next) => {
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

//POST REQUEST FROM SIGNUP (CONTINUED):
//create table for each new user when they sign up
userController.createUserTable = (req, res, next) => {
    // let username = req.body.username;
    // db.conn.query(`CREATE TABLE ${username} (
    //                 "_id" SERIAL PRIMARY KEY NOT NULL,
    //                 "day" TEXT,
    //                 "label" TEXT, 
    //                 "image" TEXT, 
    //                 "url" TEXT, 
    //                 "yield" INT, 
    //                 "healthLabels" TEXT[], 
    //                 "ingredientLines" TEXT[]
    //              );`,
    //     (error, result) => {
    //         if (error) res.status(400).send(error);
    //         else res.status(200).send('created new table for new user');
    //     });
}

module.exports = userController;