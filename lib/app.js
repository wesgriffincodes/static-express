const express = require('express');
const app = express();

const html_dir = './public/';

const dogs = [{ name: 'Spot', age: 10, weight: '20lbs' }, { name: 'Stan', age: 13, weight: '27lbs' }];
const colors = [{ name: 'red', hex: 'FF0000', r: 255, g: 0, b: 0 }, { name: 'green', hex: '008000', r: 0, g: 128, b: 0 }, { name: 'yellow', hex: 'ffff00', r: 255, g: 255, b: 0 }];

app.use(express.static('./public'));

app.set('view engine', 'ejs');


app.get('/api/v1/dogs', (req, res) => {
  res.send(dogs);
});

app.get('/api/v1/colors', (req, res) => {
  res.send(colors);
});

app.get('/colors-js', (req, res) => {
  res.sendfile(html_dir + '/colors.html');
});

app.get('/api/v1/colors/:color', (req, res) => {
  const color = colors.find(color => req.params.color === color.name);
  res.send(color);
});



app.get('/', (req, res) => {
  let colors = [
    { name: 'red', hex: 'FF0000', r: 255, g: 0, b: 0 }, 
    { name: 'green', hex: '008000', r: 0, g: 128, b: 0 }, 
    { name: 'yellow', hex: 'ffff00', r: 255, g: 255, b: 0 }
  ];

  let tagline = 'Look at these colors!';


  res.render('pages/home', {

    colors: colors,
    tagline: tagline
  });
});

app.get('/color/:name', (req, res) => {
  let colors = [
    { name: 'red', hex: 'FF0000', r: 255, g: 0, b: 0 }, 
    { name: 'green', hex: '008000', r: 0, g: 128, b: 0 }, 
    { name: 'yellow', hex: 'ffff00', r: 255, g: 255, b: 0 }
  ];

  let tagline = 'Look at these colors!';
  let color = req.params.name;
  
  res.render('pages/color', {
    url: req.url,
    color: color, 
    colors: colors,
    tagline: tagline  
  });
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/', function(req, res) {

  let colors = [
    { name: 'red', hex: 'FF0000', r: 255, g: 0, b: 0 }, 
    { name: 'green', hex: '008000', r: 0, g: 128, b: 0 }, 
    { name: 'yellow', hex: 'ffff00', r: 255, g: 255, b: 0 }
  ];

  let tagline = 'Look at these colors!';

  res.render('pages/color', {
    colors: colors,
    tagline: tagline
  });
});

app.get('/home', function(req, res) {
  res.redirect('/');
});



module.exports = app;
