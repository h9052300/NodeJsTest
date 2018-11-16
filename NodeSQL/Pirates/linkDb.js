let mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'h3141200',
    database: 'onepiece'
});

conn.connect();

exports.query = function (callBack) {
    let sql = "SELECT * FROM users";
    conn.query(sql, function (error, results, fields) {
        // exports.results = results;
        callBack(results);
    });
    conn.end();
};