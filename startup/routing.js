const express = require('express');
const routes = require('../routes/router');
const error = require('../middleware/error');

module.exports = (app) => {
    app.use('/api', routes);
    app.use(error);
};