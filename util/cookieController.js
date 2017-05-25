
const cookieController = {};
cookieController.setSSIDCookie = setSSIDCookie;

function setSSIDCookie(req, res, _id) {
  res.cookie('ssid', _id, { httpOnly: true, maxAge: 600000});
}

module.exports = cookieController;
