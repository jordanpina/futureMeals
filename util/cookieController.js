
const cookieController = {};
cookieController.setSSIDCookie = setSSIDCookie;

function setSSIDCookie(req, res, id) {
  res.cookie('ssid', id, { httpOnly: true });
}

module.exports = cookieController;
