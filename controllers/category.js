import db from "../database/index.js";

export async function renderCategories(_, res) {
  const [categories] = await db.query("SELECT * FROM categories");

  res.render("index", { categories });
}

export async function renderCategory(req, res) {
  const id = req.params.id;

  let [category] = await db.query("SELECT * FROM categories WHERE id=?", [id]);
  category = category[0];

  const [recipes] = await db.query("SELECT * FROM recipes WHERE categoryId=?", [
    id,
  ]);

  res.render("category", { category, recipes });
}

export async function createCategory(req, res) {
  const name = req.body.name;

  const [{ insertId }] = await db.query(
    "INSERT INTO categories (name) VALUES (?)",
    [name]
  );

  res.redirect("/category/" + insertId);
}

export async function deleteCategory(req, res) {
  const id = req.params.id;

  await db.query("DELETE FROM categories WHERE id=?", [id]);

  res.redirect("/");
}
