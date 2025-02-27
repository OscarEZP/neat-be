const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// This will be our application entry. We'll setup our server here.
const http = require('http');

// Set up the express app

const app = express();

// Log requests to the console.

app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.

const models = require("./models");

models.sequelize.sync().then(() => {
  console.log("Database is connect");
  require('./routes')(app);

}).catch(() => {
  console.log("Something went wrong with the DATABASE");
})


const port = parseInt(process.env.PORT, 10) || 8080;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

module.exports = app;