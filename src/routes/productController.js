import express from "express";
import {db} from "../app.js";
import methodOverride from "method-override";


const productRouter = express.Router();

productRouter.use(methodOverride('_method'));


productRouter.get("/", (req, res) => {
    res.render('addProductForm');
});

productRouter.post('/create', async (req, res) => {
    const {name, amount} = req.body;

    try {
        await db.query("INSERT INTO products (name, amount) VALUES (?,?)", [
            name,
            amount
        ]);
        res.redirect('/');
    } catch (err) {
        console.error(err.sqlMessage)
        res.redirect("/erorr")
    }
});


productRouter.delete('/delete/:id', (req, res) => {
    try {
        db.query("DELETE FROM products WHERE id=?", [req.params.id]);
        res.redirect("/");
    } catch (err) {
        console.error(err.sqlMessage);
        res.redirect("/error");
    }
});


export default productRouter;