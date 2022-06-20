import {db} from "../app.js";
import express from "express";


const recipeRouter = express.Router();

recipeRouter.get("/", async (_, res) => {
    try {
        res.render('addRecipeForm');
    } catch (err) {
        console.error(err.sqlMessage);
        res.render("errorPage");
    }
});

recipeRouter.get("/:id", async (req, res) => {
    try {
        const [products] = await db.query(`SELECT * FROM products WHERE recipeId = ?`, [req.params.id]);

        const [[{id, title}]] = await db.query(`SELECT * FROM recipes WHERE id = ?`, [req.params.id]);

        res.render('displayRecipe', {id, title, products});
    } catch (err) {
        console.error(err.sqlMessage);
        res.redirect("/error");
    }
});


recipeRouter.post('/', async (req, res) => {
    try {
        await db.query("INSERT INTO recipes (title) VALUES (?)", [req.body.title]);
        res.redirect('/');
    } catch (err) {
        console.error(err.sqlMessage);
        res.redirect("/error");
    }

});

recipeRouter.delete('/:id', async (req, res) => {
    try {
        await db.query("DELETE FROM recipes WHERE id=?", [req.params.id]);
        res.redirect("/");
    } catch (err) {
        console.error(err.sqlMessage);
        res.redirect("/error");
    }
});


export default recipeRouter;