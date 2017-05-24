const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const userController = require('./controllers/userController');
const recipeController = require('./controllers/recipeController');
const dayController = require('./controllers/dayController');
const cookieParser = require('cookie-parser');
const cookieController = require('./util/cookieController')

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/public')));
app.get('*', (req,res)=>{
  res.sendFile(path.resolve(__dirname + '/client/public/index.html'));
})

app.use(bodyParser.json());


// app.post('/login', userController.verifyUser);
// app.post('/signup', userController.checkIfUsernameExists,
//                     userController.addToUsersTable,
//                     userController.createUserTable);
// app.post('/recipeDisplay', recipeController.saveRecipe);
// app.get('/day/:day/:username', dayController.getRowsForDay);//req.params.day /monday/doug

app.listen(3000);
