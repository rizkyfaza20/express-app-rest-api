let mysql = require('mysql2');
let dotenv = require('dotenv');
dotenv.config();

let connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.port
})

connection.connect(function(error){
    if(!!error) {
        console.log(error);
    }
    else {
        console.log("Connection tested Successfully!")
    }
})

module.exports = connection
module.exports = dotenv