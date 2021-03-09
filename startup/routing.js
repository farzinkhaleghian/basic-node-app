const express = require('express');
const routes = require('../routes/router');
const error = require('../middleware/error');
const cors = require('cors');

module.exports = (app) => {
    app.use(express.json());
    app.use(cors());
    app.use('/api', routes);
    app.use(error);
};