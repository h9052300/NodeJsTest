let mysql2 = require('mysql');
let con = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'h3141200',
    database: 'myemployees'
});

con.connect();

let sqlQuery = "SELECT * FROM jobs";
con.query(sqlQuery,function (error, data, msg) {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].job_title);
    }
    // console.log(data);
});

con.end();