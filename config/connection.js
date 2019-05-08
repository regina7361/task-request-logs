
// Dependencies
let mysql = require("mysql");
require('dotenv').config()

// Set the port of our application

// MySQL DB Connection Information (remember to change this with our specific credentials)

    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: "webuser",
        password: "secretPassword",
        database: "project2_db"
        });



// Initiate MySQL Connection.
connection.connect(function(err) {
if (err) {
    console.error("error connecting: " + err.stack);
    return;
}
console.log("connected as id " + connection.threadId);
});

module.exports = connection;