var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Liverpool18@",
  database: "nodejs_api"
});

con.connect(function (err){mysql
    if(err) throw err;
});

module.exports = con;