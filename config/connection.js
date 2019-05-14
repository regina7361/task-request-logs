
// Dependencies
let mysql = require("mysql");
require('dotenv').config()

// Set the port of our application

// MySQL DB Connection Information (remember to change this with our specific credentials)
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection({
        host: process.env.Host,
        port: process.env.Port,
        user: process.env.Username,
        password: process.env.Password,
        database: process.env.Database
        });
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: "task_management_db"
        });
};

// Initiate MySQL Connection.
connection.connect(function(err) {
if (err) {
    console.error("error connecting: " + err.stack);
    return;
}
console.log("connected as id " + connection.threadId);
});

module.exports = connection;