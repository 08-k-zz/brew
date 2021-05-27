const express = require('express');
const path = require('path');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');
const httpStatus = require('http-status');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./utils/ApiError');
const favicon = require('serve-favicon');


const app = express();
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}
app.use(express.static(DIST_DIR));

app.get('/', function(req, res) {
  res.sendFile(HTML_FILE);
})
app.get('/about', function(req, res) {
  res.sendFile(HTML_FILE);
})
app.get('/dashboard', function(req, res) {
  res.sendFile(HTML_FILE);
})
app.get('/api/home', function(req, res) {
  res.json("Hello World!");
})
app.get('/api/about', function(req, res) {
  res.json("Hello World!");
})
app.get('/api/dashboard', function(req, res) {
  res.json("Hello World!");
})

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(xss());

app.use(compression());

app.use(cors());
app.options('*', cors());

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
