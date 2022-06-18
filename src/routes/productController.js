import express from "express";
import {db} from "../app.js";


const productRouter = express.Router();


productRouter.get("/", (req, res) => {
    const recipeId = req.query.recipeId;

    res.render('addProductForm', {recipeId});
});

productRouter.post('/', async (req, res) => {
    const {name, amount} = req.body;

    try {
        await db.query("INSERT INTO products (name, amount, recipeId) VALUES (?,?,?)", [
            name,
            amount,
            req.query.recipeId
        ]);

        res.redirect(`/recipe/${req.query.recipeId}`);
    } catch (err) {
        console.error(err.sqlMessage);
        res.redirect("/error");
    }
});

productRouter.delete('/:id', async (req, res) => {
    try {
        await db.query("DELETE FROM products WHERE id=?", [req.params.id]);
        res.redirect(`/`);
    } catch (err) {
        console.error(err.sqlMessage);
        res.redirect("/error");
    }
});


export default productRouter;