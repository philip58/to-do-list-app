import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var listItemsToday = [];
var listItemsTomorrow = [];

app.get("/",(req,res) => {
    res.render("index.ejs",{newListItem: listItemsToday});
});

app.get("/tomorrow",(req,res) => {
    res.render("tomorrow.ejs",{newListItem: listItemsTomorrow});
});

app.post("/",(req,res) => {
    var listItemToday = req.body.newItem;
    listItemsToday.push(listItemToday);
    res.redirect("/");
});

app.post("/tomorrow",(req,res) => {
    var listItemTomorrow = req.body.newItem;
    listItemsTomorrow.push(listItemTomorrow);
    res.redirect("/tomorrow");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});