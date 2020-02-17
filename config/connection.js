const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    db = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });
};

db.connect( (err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = db;