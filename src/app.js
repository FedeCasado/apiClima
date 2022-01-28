const express = require('express');
const app = express();
const routes = require('./routes/index');
require('dotenv').config();

//settings

//Routes
app.use('/v1', routes)

module.exports = app;