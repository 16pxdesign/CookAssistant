import mysql from "mysql2/promise";
import waitPort from "wait-port";

const {
  MYSQL_HOST: HOST,
  MYSQL_USER: USER,
  MYSQL_PASSWORD: PASSWORD,
  MYSQL_DB: DB,
} = process.env;

await waitPort({ host: HOST, port: 3306 });

const db = await mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DB,
});

export default db;
