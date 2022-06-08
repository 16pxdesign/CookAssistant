import {db} from "../app.js";
import express from "express";
import methodOverride from "method-override";


const recipeRouter = express.Router();

recipeRouter.use(methodOverride('_method'));

recipeRouter.get("/", (req, res) => {
    res.render('addRecipeForm');
});

recipeRouter.get("/:id", async (req, res) => {
    try {
    const result = await db.query("SELECT * FROM recipes WHERE id=?", [req.params.id]);

    const recipe = result[0];

    res.render('displayRecipes', {recipe});
    }catch (err) {
        console.error(err.sqlMessage);
        res.redirect("/error");
    }
});


recipeRouter.post('/create', (req, res) => {
    try {
        db.query("INSERT INTO recipes (name) VALUES (?)", [req.body.title]);
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