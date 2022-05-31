import db from "../database/index.js";

export async function createProduct(req, res) {
  const { recipeId, name, ammount } = req.body;

  await db.query(
    "INSERT INTO products (recipeId, name, ammount) VALUES (?,?,?)",
    [recipeId, name, ammount]
  );

  res.redirect("/recipe/" + recipeId);
}

export async function deleteProduct(req, res) {
  const id = req.params.id;
  const recipeId = req.body.recipeId;

  await db.query("DELETE FROM products WHERE id=?", [id]);

  res.redirect("/recipe/" + recipeId);
}
