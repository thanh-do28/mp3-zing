const express = require("express");
const router = express.Router();
const musicController = require("../controllers/music.controllers")

router.get("/list", musicController.getAll);


module.exports = router;