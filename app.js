var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

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

//there is alot of these so I will comment one of the extremely and the the format follows:
app.get('/about', function (req, res) {
  //if the got to localhost:port/about {{{body}}} set body to this...
  res.render('./about/about-page', {
    //body is located is located in views/about/about-page.handlebars
    title: 'About Me',
    //sent title of the page to be 'About Me'

  });
});

app.get('/about-club-histoy', function (req, res) {
  res.render('./about/about-club-history-page', {
    title: 'About Me',

  });
});

app.get('/about-leadership', function (req, res) {
  res.render('./about/about-leadership-page', {
    title: 'About Me',

  });
});


app.get('/about-alumni', function (req, res) {
  res.render('./about/about-alumni-page', {
    title: 'About Me',

  });
});


app.get('/about-sponsership', function (req, res) {
  res.render('./about/about-sponsership-page', {
    title: 'About Me',

  });
});


app.get('/projects', function (req, res) {
  res.render('./projects/projects-page', {
    title: 'My Projects',

  });
});


app.get('/projects-mars-rover', function (req, res) {
  res.render('./projects/projects-mars-rover-page', {
    title: 'About Me',

  });
});


app.get('/projects-aerial', function (req, res) {
  res.render('./projects/projects-aerial-page', {
    title: 'About Me',

  });
});


app.get('/projects-underwater', function (req, res) {
  res.render('./projects/projects-underwater-page', {
    title: 'About Me',

  });
});


app.get('/projects-drone-racing', function (req, res) {
  res.render('./projects/projects-drone-racing-page', {
    title: 'About Me',

  });
});


app.get('/projects-membership-projects', function (req, res) {
  res.render('./projects/projects-membership-projects-page', {
    title: 'About Me',

  });
});


app.get('/resources', function (req, res) {
  res.render('./resources/resources-page', {
    title: 'About Me',

  });
});


app.get('/resources-finacial', function (req, res) {
  res.render('./resources/resources-finacial-page', {
    title: 'About Me',

  });
});


app.get('/resources-osurc-brand', function (req, res) {
  res.render('./resources/resources-osurc-brand-page', {
    title: 'About Me',

  });
});


app.get('/calendar', function (req, res) {
  res.render('calendar-page', {
    title: 'About Me',

  });
});


app.get('/contact', function (req, res) {
  res.render('contact-page', {
    title: 'About Me',

  });
});


app.get('/store', function (req, res) {
  res.render('store-page', {
    title: 'About Me',

  });
});

app.get('/search', function (req, res) {
  res.render('search-page', {
    title: 'Resume',

  });
});



// Return a 404 and render the 404 page for any other route.
app.get('*', function (req, res) {
  //* is a wildcard meaning everything
  res.render('404-page', {
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
