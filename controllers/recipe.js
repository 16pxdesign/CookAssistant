import db from "../database/index.js";

export async function renderRecipe(req, res) {
  const id = req.params.id;

  const [recipes] = await db.query("SELECT * FROM recipes WHERE id=?", [id]);
  const recipe = recipes[0];

  const [products] = await db.query("SELECT * FROM products WHERE recipeId=?", [
    id,
  ]);

  res.render("recipe", { recipe, products });
}

export async function createRecipe(req, res) {
  const { name, categoryId } = req.body;

  const [{ insertId }] = await db.query(
    "INSERT INTO recipes (categoryId, name) VALUES (?,?)",
    [categoryId, name]
  );

  res.redirect("/recipe/" + insertId);
}

export async function deleteRecipe(req, res) {
  const id = req.params.id;
  const categoryId = req.body.categoryId;

  await db.query("DELETE FROM recipes WHERE id=?", [id]);

  res.redirect("/category/" + categoryId);
}
