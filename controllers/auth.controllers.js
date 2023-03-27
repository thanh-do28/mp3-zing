const db = require("../models/db");
const db1 = require("../models/db1");
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports.admin = (req, res)=>{
    res.render("player",{
        title: "player",
    })
}

module.exports.maininterface = (req, res)=>{
  res.render("main_interface")
}

var strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  
  module.exports.getLogin = (req, res) => {
    res.render("login", {
      title: "login",
    });
  };
  
  module.exports.getCreate = (req, res) => {
    res.render("register", {
      title: "register",
    });
  };
  
  module.exports.createUser = (req, res) => {
    console.log(req.body);
  
    let { name, username, email, phone, website, password } = req.body;
    if (!email || !password) {
      return res.status(500).json({ message: "Invalid  email or password" });
    }
    if (!strongRegex.test(password)) {
      // console.log("aaaa");
      return res.status(500).json({ message1: "Password is not strong engough" });
    }
    // generate password and id
    password = bcrypt.hashSync(password, saltRounds);
    let id = Math.floor(Math.random() * 1000000);
    // execute SQL query
    db1.execute("SELECT * FROM tbl_users WHERE email = ?", [email]).then(
      (data) => {
        // console.log(data);
        let [user1] = data;
        // 1 mảng chứa 1 phần tử nếu tìm thấy user
        // [] nếu không tìm thấy
        let user = user1[0];
        Promise.reject;
        // console.log(user);
        if (!user) {
          // return promise.reject("User already exist") // debug sập server
          db1.execute("INSERT INTO tbl_users VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
            id,
            name,
            null,
            email,
            null,
            null,
            password,
            null,
          ])
            .then((data) => {
              // let [row] = data;
              // console.log(data);
              res.status(200).json({
                message2: "create one successfully",
              });
            })
            .catch((err) => console.log(err));
        } else {
          res.status(404).json({
            message3: "already exist",
          });
        }
      }
    );
  };
  
  module.exports.loginAuth = (req, res) => {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).json({ message: "Invalid  email or password" });
    }
    // console.log(req.body);
    db1.execute("SELECT * FROM tbl_users WHERE email = ?", [email]).then(
      (data) => {
        let [user1] = data;
        let user = user1[0];
        if (!user) {
          res.status(404).json({
            message: "email is not correct",
          });
        } else {
          let pass = bcrypt.compareSync(password, user.password);
          // console.log(pass);
          if (pass) {
            res.cookie("role", user.role, { signed: true });
            res.cookie("userId", user.id, { signed: true });
            res.status(200).json({
              status: "success",
              message: "Login successfully",
            });
          } else {
            res.status(404).json({
              message: "wrong password",
            });
          }
        }
      }
    );
  };