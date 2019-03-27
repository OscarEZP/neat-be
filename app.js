const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
// const {BigQuery} = require('@google-cloud/bigquery');

// This will be our application entry. We'll setup our server here.
const http = require('http');

// Set up the express app

const app = express();

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

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// const bigquery = new BigQuery({
//   projectId: 'neatwebplatform'
// });

// bigquery.dataset('neatdb').table('auth').insert([{email: "oskr96.oz@gmail.com", password: "1234", type: 1}])


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