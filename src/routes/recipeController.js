import {db} from "../app.js";
import express from "express";
import methodOverride from "method-override";


const recipeRouter = express.Router();

recipeRouter.use(methodOverride('_method'));

recipeRouter.get("/", async (_, res) => {
    try {
        const [products] = await db.query("SELECT * FROM products");
        res.render('addRecipeForm', {products});
    } catch (err) {
        console.error(err.sqlMessage);
        res.render("errorPage");
    }
});

recipeRouter.get("/:id", async (req, res) => {
    try {
        const [products] = await db.query(`SELECT name, amount FROM products JOIN products_recipes pr ON
         products.id = pr.product_id WHERE pr.recipe_id = ?`, [req.params.id]);

        const [[{name}]] = await db.query(`SELECT name FROM recipes WHERE recipes.id = ?`, [req.params.id]);

        res.render('displayRecipes', {name, products});
    } catch (err) {
        console.error(err.sqlMessage);
        res.redirect("/error");
    }
});


recipeRouter.post('/create', async (req, res) => {
    try {
        const [{insertId}] = await db.query("INSERT INTO recipes (name) VALUES (?)", [req.body.title]);
        for (let productId of req.body.productsList) {
            await db.query("INSERT INTO products_recipes (recipe_id, product_id) VALUES (?, ?)", [insertId, productId]);
        }

        res.redirect('/');
    } catch (err) {
        console.error(err.sqlMessage);
        res.redirect("/error");
    }

});

recipeRouter.delete('/delete/:id', (req, res) => {
    try {
        db.query("DELETE FROM recipes WHERE id=?", [req.params.id]);
        res.redirect("/");
    } catch (err) {
        console.error(err.sqlMessage);
        res.redirect("/error");
    }
});


export default recipeRouter;