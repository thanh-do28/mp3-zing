const db = require("../models/db");

module.exports.reqAuth = (req, res, next) => {
  // console.log(req.cookies);
  // console.log(req.signedCookies.usersId);  //Về dạng thông thường sau khi mã hóa
  if (Object.keys(req.signedCookies).length == 0) {
    res.redirect("/auth/login");
  } else {
    next();
  }
};

module.exports.notAuth = (req, res, next) => {
  // console.log(req.cookies);
  // console.log(req.signedCookies.usersId);
  if (Object.keys(req.signedCookies).length !== 0) {
    res.redirect("/");
  } else {
    next();
  }
};
