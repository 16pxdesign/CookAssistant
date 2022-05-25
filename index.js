import mysql from "mysql2/promise";
import express from "express";

async function init() {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "cook_assistant",
    password: "admin",
  });

  const app = express();

  app.set("view engine", "ejs");
  app.use(express.urlencoded({ extended: true }));

  app.get("/", async (_, res) => {
    db.query("SELECT * FROM recipes").then(([recipes]) => {
      res.render("index", { recipes });
    });
  });
  app.post("/create-recipe", async (req, res) => {
    const name = req.body.name;

    db.query("INSERT INTO recipes (name) VALUES (?)", [name]).then(
      ([{ insertId }]) => {
        res.redirect("/recipe/" + insertId);
      }
    );
  });
  app.post("/delete-recipe/:id", async (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM recipes WHERE id=?", [id]).then(() => {
      res.redirect("/");
    });
  });

  app.get("/recipe/:id", async (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM recipes WHERE id=?", [id]).then(([recipes]) => {
      const recipe = recipes[0];

      db.query("SELECT * FROM products WHERE recipeId=?", [id]).then(
        ([products]) => {
          res.render("recipe", { recipe, products });
        }
      );
    });
  });
  app.post("/create-product", async (req, res) => {
    const { recipeId, name, ammount } = req.body;

    db.query("INSERT INTO products (recipeId, name, ammount) VALUES (?,?,?)", [
      recipeId,
      name,
      ammount,
    ]).then(() => {
      res.redirect("/recipe/" + recipeId);
    });
  });
  app.post("/delete-product/:id", async (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM products WHERE id=?", [id]).then(() => {
      res.redirect("/");
    });
  });

  app.listen(4000, () => console.log("server started http://localhost:4000"));
}

init();
