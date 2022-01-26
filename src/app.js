const express = require('express');
const app = express();
const routes = require('./routes/index');

//settings

//Routes
app.use('/v1', routes)

module.exports = app;