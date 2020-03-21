var express = require("express");
var app = express();

// Routes

app.get("/", function (req, res) {
    res.send("Hi there, welcome to my assignment!");
})

app.get("/speak/:animal", (req, res) => {
    var animal = req.params.animal,
        sounds = {
            pig: "Oink",
            cow: "Moo",
            dog: "Woof woof!", 
            cat: "Mua", 
            fish: "..."
        }

    res.send(`The ${animal} says '${sounds[animal.toLowerCase()]}'`)
})

app.get("/repeat/:word/:num", (req, res) => {
    var word = req.params.word + " ",      
        num = Number(req.params.num)

    // repeate num times than slice out the last char
    res.send(`${word.repeat(num).slice(0, -1)}`);
})

app.get("*", (req, res) => {
    res.send("Sorry, page not found...What are you oding with you life?");
})

// Listener

app.listen(3000, () => {
    console.log("Server started!!! http://localhost:3000/");
});

