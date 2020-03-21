var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
// routes

app.get("/", (req, res) => {
    // res.send("<h1>Welcome to the homepage!</h1>");
    res.render("home")
})

app.get("/love/:thing", (req, res) => {
    var thing = req.params.thing;

    res.render("love", {thing: thing});
})

app.get("/posts", (req, res) => {
    var posts = [
        {title: "Post 1", author: "Susy"}, 
        {title: "Post 2", author: "Susy"}, 
        {title: "Post 3", author: "Susy"}, 
    ]

    res.render("posts", {posts:posts});
})

// listener

app.listen(3000, () => {
    console.log("Server: http://localhost:3000/");
})