var request = require('request');
var express = require('express');
var app = express();




app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('search');
})

app.get('/results', (req, res) => {
    var keyword = req.query.keyword;
    var url = 'http://omdbapi.com/?apikey=thewdb&s=' + keyword;

    request(url, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            var parsedData = JSON.parse(body)
            res.render('results', {data:parsedData});
        }
    })
})


app.listen(3000, () => {
    console.log("Movie: http://localhost:3000");
    
})