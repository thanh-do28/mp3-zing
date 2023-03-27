const mysql = require("mysql2")

let pool = mysql.createPool({
    host:"127.0.0.1",
    database:"music_schema",
    user:"root",
    password:"Yeulam0909"
});



module.exports =pool.promise();
