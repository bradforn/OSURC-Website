///////Declaring the libraries that are being used in the server config file///////////////////////////////////////////
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Global Varibles// Kinda this is javascript not c...////
var app = express();
var port = process.env.PORT || 3000; //This is where the port is set. process.env.PORT
/////////////////////////////////////////////////////////
// Use Handlebars as the view engine for the app.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

// Serve static files from public/.
app.use(express.static(path.join(__dirname, 'public')));

/*
 * Route the root path ('/') to the index page.  Give Handlebars the
 * appropriate page title and data for all users to render.
 */
app.get('/', function (req, res) {
  res.render('main-page', {
    title: 'Welcome to My Website',

  });
});

/*
 *This function tells Node where to go with what information when with input: localhost:port/input
 *there is alot of these so I will comment one of the extremely and the the format follows:
 */
app.get('/about', function (req, res) {
  //if the got to localhost:port/about {{{body}}} set body to this...
  res.render('./about/about-page', {
    //body is located is located in views/about/about-page.handlebars
    title: 'About',
    //sent title of the page to be 'About Me'

  });
});

app.get('/about-club-histoy', function (req, res) {
  res.render('./about/about-club-history-page', {
    title: 'Club Histoy',
  });
});

app.get('/about-leadership', function (req, res) {
  res.render('./about/about-leadership-page', {
    title: 'OSU Robotics Leadership',
  });
});


app.get('/about-alumni', function (req, res) {
  res.render('./about/about-alumni-page', {
    title: 'Alumni',
  });
});


app.get('/about-sponsership', function (req, res) {
  res.render('./about/about-sponsership-page', {
    title: 'Sponsership',
  });
});


app.get('/projects', function (req, res) {
  res.render('./projects/projects-page', {
    title: 'Projects',
  });
});


app.get('/projects-mars-rover', function (req, res) {
  res.render('./projects/projects-mars-rover-page', {
    title: 'Mars Rover',
  });
});


app.get('/projects-aerial', function (req, res) {
  res.render('./projects/projects-aerial-page', {
    title: 'Aerial',
  });
});


app.get('/projects-underwater', function (req, res) {
  res.render('./projects/projects-underwater-page', {
    title: 'Underwater',
  });
});


app.get('/projects-drone-racing', function (req, res) {
  res.render('./projects/projects-drone-racing-page', {
    title: 'Drone Racing!!!',
  });
});


app.get('/projects-membership-projects', function (req, res) {
  res.render('./projects/projects-membership-projects-page', {
    title: 'Porjects',
  });
});


app.get('/resources', function (req, res) {
  res.render('./resources/resources-page', {
    title: 'Resources',
  });
});


app.get('/resources-finacial', function (req, res) {
  res.render('./resources/resources-finacial-page', {
    title: 'Finacial',
  });
});


app.get('/resources-osurc-brand', function (req, res) {
  res.render('./resources/resources-osurc-brand-page', {
    title: 'OSURC Brand',
  });
});


app.get('/calendar', function (req, res) {
  res.render('calendar-page', {
    title: 'Calendar',
  });
});


app.get('/contact', function (req, res) {
  res.render('contact-page', {
    title: 'Contact Us',
  });
});


app.get('/store', function (req, res) {
  res.render('store-page', {
    title: 'The RESSI Store',
  });
});

app.get('/search', function (req, res) {
  res.render('search-page', {
    title: 'Search',
  });
});



/*
 *This is very important function that should be used with all websites with handlebars and express npm dependencies
 * Return a 404 and render the 404 page for any other route.
 */
app.get('*', function (req, res) {
  //* is a wildcard meaning everything
  res.render('404-pagethere is alot of these so I will comment one of the extremely and the the format follows:', {
    // send to 404-page.handlebars
     title: 'Page Not Found!',
     //title of page
     layout: '404'
     //overwrite layout from main.handlebars to 404.handlebars
  });
});

// Listen on the specified port.
app.listen(port, function () {
  console.log("== Listening on port", port, " \n== Visit http://localhost:"+port+"/", "to see the website.");
});
