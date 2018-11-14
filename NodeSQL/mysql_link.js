var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'onepiece'
});

connection.connect();

let sql = "SELECT * FROM users";
connection.query(sql, function (error, results, fields) {
    // console.log(error);
    // console.log('---------------------------------------');
    // console.log(results);

    for (let i = 0; i < results.length; i++) {
        console.log(results[i].name);
    }
});

connection.end();
