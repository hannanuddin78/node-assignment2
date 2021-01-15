var express = require('express');
var logger = require('morgan');
require("dotenv").config();
const db = require('./db/db');

var shopsRouter = require('./routes/shops');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/shops", shopsRouter);

module.exports = app;
