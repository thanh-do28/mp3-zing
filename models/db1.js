const mysql = require("mysql2")

let pool1 = mysql.createPool({
    host:"127.0.0.1",
    database:"users_schemas",
    user:"root",
    password:"Yeulam0909"
});


module.exports =pool1.promise();