const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// This will be our application entry. We'll setup our server here.
const http = require('http');

// Set up the express app

const app = express();

// Log requests to the console.
// app.use(cors);
// app.use(cors);
// app.options('*', cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR");
  if (req.headers.origin) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  }
  if (req.method === 'OPTIONS') {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
 });

  app.use(cors({
    origin:'http://localhost:4200'
  }));

app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.

const models = require("./models");

models.sequelize.sync().then(() => {
  console.log("Database is connect");

}).catch(() => {
  console.log("Something went wrong with the DATABASE");
})
require('./routes')(app);


const port = parseInt(process.env.PORT, 10) || 8080;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

module.exports = app;