import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.render("index.ejs");
});

app.get("/tomorrow",(req,res) => {
    res.render("tomorrow.ejs");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});