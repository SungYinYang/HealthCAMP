var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors');
var mysql = require('mysql');

//required for cross domain
app.use(cors());

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

var con = mysql.createConnection({
  host: "localhost",
  database: 'test',
  user: "root",
  password: "dd19215"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


// POST method route
app.post('/post-person', function (req, res) {
    var insertQuery = "INSERT INTO health (f_name, age, gender, medi, photo, note) Values (?, ?, ?, ?, ?, ?);";
    var people = req.body;
    console.log(people);
    var query = mysql.format(insertQuery, [people.firstName, people.age, people.gender, people.medi, people.photo, people.note]);
    con.query(query, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.json(result)
  })
   });
  

app.get("/get-person", (req, res, next) => {
    var sql = "select * from health";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('--------------------server',result);
        res.json(result)
  })
   });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});