const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: "localhost",
    user: "root",
    password: "#Hemal",
    database: "app_db"
});

module.exports = pool;