//requiring our dependencies
const mysql = require("mysql");

//create our conneciton to the database
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "august16",
        database: "burgers_db"
    });
}
connection.connect();
module.exports = connection;

//