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

await db.query(`
  CREATE TABLE IF NOT EXISTS categories (
      id int AUTO_INCREMENT,
      name varchar(255) NOT NULL,
      PRIMARY KEY (id)
  )`);

await db.query(`
  CREATE TABLE IF NOT EXISTS categories_parents (
      category_id int NOT NULL,
      parent_id int DEFAULT 0,
      PRIMARY KEY (category_id, parent_id),
      FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
  )`);

await db.query(`
  CREATE TABLE IF NOT EXISTS recipes (
      id int AUTO_INCREMENT,
      name varchar(255) NOT NULL,
      PRIMARY KEY (id)
  )`);

await db.query(`
  CREATE TABLE IF NOT EXISTS categories_recipes (
      category_id int NOT NULL,
      recipe_id int NOT NULL,
      PRIMARY KEY (category_id, recipe_id),
      FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
      FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
  )`);

await db.query(`
  CREATE TABLE IF NOT EXISTS products (
      id int AUTO_INCREMENT,
      recipe_id int NOT NULL,
      name varchar(255) NOT NULL,
      amount int NOT NULL,
      PRIMARY KEY (id),
      FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
  )`);

export default db;
