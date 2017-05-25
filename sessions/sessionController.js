// const Session = require('./sessionTable.js');
// const sessionController = {};
//
// /**
// * isLoggedIn - find the appropriate session for this request in the database, then
// * verify whether or not the session is still valid.
// */
// sessionController.isLoggedIn = (req, res, next) => {
//   // write code here
//   if (req.cookies.ssid) {
//     next();
//   } else {
//     res.redirect('/login');
//   }
// };
//
// /**
// * startSession - create a new Session model and then save the new session to the
// * database.
// *
// */
// sessionController.startSession = (cookieId, callback) => {
//   //write code here
//   const newSession = new Session(
//     {
//       cookieId: cookieId
//     }
//   );
//   newSession.save();
// };
//
// module.exports = sessionController;
