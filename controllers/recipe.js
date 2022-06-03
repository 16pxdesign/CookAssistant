import db from "../database/index.js";

export async function renderRecipe(req, res) {
  const id = req.params.id;

  let [recipe] = await db.query(`SELECT * FROM recipes WHERE id=?`, [id]);
  recipe = recipe[0];

  const [products] = await db.query(
    "SELECT * FROM products WHERE recipe_id=?",
    [id]
  );

  res.render("recipe", { recipe, products });
}

export async function createRecipe(req, res) {
  let { categoriesIds } = req.body;
  const { name } = req.body;

  if (!Array.isArray(categoriesIds)) categoriesIds = [categoriesIds];

  const [{ insertId: recipeId }] = await db.query(
    "INSERT INTO recipes (name) VALUES (?)",
    [name]
  );

  for (const categoryId of categoriesIds) {
    await db.query(
      "INSERT INTO categories_recipes (category_id, recipe_id) VALUES (?,?)",
      [categoryId, recipeId]
    );
  }

  res.redirect("/");
}

export async function deleteRecipe(req, res) {
  const id = req.params.id;

  await db.query("DELETE FROM recipes WHERE id=?", [id]);

  res.redirect("/");
}
