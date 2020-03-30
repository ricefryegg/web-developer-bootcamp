var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


var campGrounds = [
    { name: 'Salmon Creek', image: 'https://hipcamp-res.cloudinary.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1437679190/campground-photos/cwfi6nzi26glgkctpyko/tahoe-national-forest-salmon-creek-campground.jpg' },
    { name: 'Granite Hill', image: 'https://www.granitehillcampingresort.com/app/uploads/2016/12/about.jpg' },
    { name: 'Mountain Goat\'s Rest', image: 'https://www.mountainphotography.com/images/xl/20160704-Heart-Lake-Goats.jpg' },
    { name: 'Salmon Creek', image: 'https://hipcamp-res.cloudinary.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1437679190/campground-photos/cwfi6nzi26glgkctpyko/tahoe-national-forest-salmon-creek-campground.jpg' },
    { name: 'Granite Hill', image: 'https://www.granitehillcampingresort.com/app/uploads/2016/12/about.jpg' },
    { name: 'Mountain Goat\'s Rest', image: 'https://www.mountainphotography.com/images/xl/20160704-Heart-Lake-Goats.jpg' },
    { name: 'Salmon Creek', image: 'https://hipcamp-res.cloudinary.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1437679190/campground-photos/cwfi6nzi26glgkctpyko/tahoe-national-forest-salmon-creek-campground.jpg' },
    { name: 'Granite Hill', image: 'https://www.granitehillcampingresort.com/app/uploads/2016/12/about.jpg' },
    { name: 'Mountain Goat\'s Rest', image: 'https://www.mountainphotography.com/images/xl/20160704-Heart-Lake-Goats.jpg' },
];


app.get('/', (req, res) => {
    res.render('landing')
});

app.get('/campgrounds', (req, res) => {
    res.render('campgrounds', { campgrounds: campGrounds })
});

app.post('/campgrounds', (req, res) => {
    // get data from form
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = { name: name, image: image };

    campGrounds.push(newCampground);

    // redirect back to campgrounds
    res.redirect('/campgrounds');   // default get request
});

app.get('/campgrounds/new', (req, res) => {
    res.render('new.ejs');
});


app.listen(3000, () => {
    console.log("http://localhost:3000/");

})