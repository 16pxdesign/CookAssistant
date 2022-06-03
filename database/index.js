import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "cook_assistant",
  password: "admin",
});

export default db;
