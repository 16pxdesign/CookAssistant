import express from "express";
import {db} from "../app.js";


const homeRouter = express.Router();


homeRouter.get("/", async (_, res) => {
    try {
        const [recipes] = await db.query("SELECT * FROM recipes");
        res.render('home', {recipes});
    } catch (err) {
        console.error(err.sqlMessage);
        res.render("errorPage");
    }
});


export default homeRouter;