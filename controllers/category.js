import db from "../database/index.js";

export async function renderCategories(_, res) {
  const [categoriesWithParents] = await db.query(
    `SELECT * FROM categories
    JOIN categories_parents cp on categories.id = cp.category_id`
  );

  const [categories] = await db.query(`SELECT * FROM categories`);

  res.render("index", { categoriesWithParents, categories });
}

export async function renderCategory(req, res) {
  const id = req.params.id;

  let [category] = await db.query("SELECT * FROM categories WHERE id=?", [id]);
  category = category[0];

  const [subcategories] = await db.query(
    `SELECT * FROM categories
    JOIN cook_assistant.categories_parents cp on categories.id = cp.category_id
    WHERE cp.parent_id=?`,
    [id]
  );

  const [recipes] = await db.query(
    `SELECT * FROM recipes
    JOIN categories_recipes cr on recipes.id = cr.recipe_id
    WHERE cr.category_id=?`,
    [id]
  );

  res.render("category", { category, subcategories, recipes });
}

export async function createCategory(req, res) {
  let { parentsIds } = req.body;
  const { name } = req.body;

  if (!Array.isArray(parentsIds)) parentsIds = [parentsIds];

  const [{ insertId: categoryId }] = await db.query(
    "INSERT INTO categories (name) VALUES (?)",
    [name]
  );

  for (const parentId of parentsIds) {
    await db.query(
      "INSERT INTO categories_parents (category_id, parent_id) VALUES (?,?)",
      [categoryId, parentId]
    );
  }

  res.redirect("/");
}

export async function deleteCategory(req, res) {
  const id = req.params.id;

  await db.query("DELETE FROM categories WHERE id=?", [id]);

  res.redirect("/");
}
