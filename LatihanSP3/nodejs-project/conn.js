var mysql = require('mysql');

var con = mysql.createConnection({  
  host: "172.17.0.1",
  user: "root",
  password: "Liverpool18@",
  database: "nodejs_api"
});

con.connect(function (err){mysql
    if(err) throw err;
});

module.exports = con;
