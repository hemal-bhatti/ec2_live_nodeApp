const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: "hemaldb.cbwaeykesql2.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "Hemal2004",
    database: "app_db",
  port: 3306
});

if(pool){
  pool.query(
    `CREATE TABLE "users" (
  "id" int NOT NULL auto_increment primary key,
  "username" varchar(255) NOT NULL,
  "password" varchar(255) NOT NULL,
  "created_at" timestamp NULL DEFAULT CURRENT_TIMESTAMP);`
  );

  pool.query(`
    INSERT INTO "users" ("id", "username", "password", "created_at") VALUES
      (1, 'Hemal', '1234', '2025-05-28 13:30:15'),
      (2, 'meet', '1234', '2025-05-28 13:31:04');
  `);

}


module.exports = pool;
