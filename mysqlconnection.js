var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "user_name",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
