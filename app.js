var express = require('express'); // add Express module

var app =  express(); // create Express application

app.set('view engine','ejs'); // Set view engine

var routes= require('./routes'); // Require routes folder where export the routes functionalities

var path = require('path'); // Specify our statics resources 
app.use(express.static(path.join(__dirname,'public')));

// Routes

// Home
app.get('/', routes.home);

// Defender_single
app.get('/the_defenders/:defender_number?', routes.series_single);

// notFound
app.get('*', routes.notFound);

// Launch server on port:3000
//app.listen(3000, function(){
//	console.log("The application is running on localhost:3000");
//});
app.listen(process.env.PORT || 3000);