require("dotenv").config();
const express = require("express");
const bp = require("body-parser");
const ejsLayouts = require("express-ejs-layouts");
const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));
app.use(bp.urlencoded({extended: true}));
app.use(ejsLayouts);

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/about", (req, res) => {
	res.render("about");
});

app.get("/projects", (req, res) => {
	res.render("projects");
});

app.get("/projects/danmaku", (req, res) => {
	res.render("projects/danmaku");
});

app.get("/projects/movielist", (req, res) => {
	res.render("projects/movielist");
});

app.get("/projects/punchcard", (req, res) => {
	res.render("projects/punchcard");
});

app.get("/projects/goodmarket", (req, res) => {
	res.render("projects/goodmarket");
});

var server = app.listen(process.env.PORT || 3000);
{console.log('Now Connected to Port: ' + port)}

module.exports = server;