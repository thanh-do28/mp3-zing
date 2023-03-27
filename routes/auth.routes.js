const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers")
// router.get("/", (req, res) =>{
//   res.render("index")
// })

router.get("/player", authController.admin)

router.get("/maininterface", authController.maininterface)

router.get("/register", authController.getCreate);

router.post("/register", authController.createUser);

router.get("/login", authController.getLogin);

router.post("/login", authController.loginAuth);


// router.get("/login", (req, res) => {
//   res.render("login");
// });

// router.get("/register", (req, res) => {
//   res.send("this is register page");
// });

module.exports = router;
