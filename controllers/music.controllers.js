const db = require("../models/db");
const db1 = require("../models/db1"); //db1 đăng kí đăng nhập
const bcrypt = require('bcrypt');


module.exports.getAll =  (req, res)=>{
    db.execute("SELECT * FROM list_music")
    .then((data) => {
        let [rows, cols] = data;
        // array destructuring
        // console.log(rows);
        res.json(rows)
    })
    .catch((err) => console.log(err))
}