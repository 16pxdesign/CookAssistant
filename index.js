import express from "express";
import routes from "./routes/index.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(4000, () => console.log("Server started at http://localhost:4000"));
