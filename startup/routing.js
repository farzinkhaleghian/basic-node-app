const express = require('express');
const routes = require('../routes/router');

module.exports = (app) => {
    app.use('/api', routes);
};