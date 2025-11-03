// Setup express and ejs
var express = require ('express')
const path = require("path");
var ejs = require('ejs')


// Create the express application object
const app = express()
const port = 8000

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs');

// Set the location for static files
app.use(express.static('public'));

app.use('/static', express.static('public'));

// Set up the body parser 
app.use(express.urlencoded({ extended: true })); 

// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

// Start the web app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;