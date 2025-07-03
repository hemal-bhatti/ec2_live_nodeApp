const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: "hemal-db.cbwaeykesql2.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "#Hemal2004",
    database: "app_db",
  port: 3306
});

module.exports = pool;
