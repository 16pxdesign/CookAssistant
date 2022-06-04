import {db} from "../app.js";
import express from "express";


const recipeFormRouter = express.Router();

recipeFormRouter.get("/", (req, res) => {
    res.render('addRecipeForm');
});

recipeFormRouter.post('/create', (req, res) => {
    db.query("INSERT INTO recipes (name) VALUES (?)", [req.body.title]);

    res.redirect('/');
});

// recipeFormRouter.delete('/delete/:id', (req, res) => {
//     db.query("DELETE FROM recipes WHERE id=?", [req.params.id]);
//
//     res.redirect("/");
// })

export default recipeFormRouter;