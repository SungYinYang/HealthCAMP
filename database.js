// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     database : 'hwdb',
//     user     : 'root',
//     password : 'dd19215',
// });

// connection.connect(function(err) {
//     if (err) {
//         console.error('Error connecting: ' + err.stack);
//         return;
//     }

//     console.log('Connected as id ' + connection.threadId);
// });

// connection.query('SELECT * FROM employee', function (error, results, fields) {
//     if (error)
//         throw error;

//     results.forEach(result => {
//         console.log(result);
//     });
// });

// connection.end();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dd19215"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});