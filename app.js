const config = require('config');
const logger = require('./startup/logging');
const express = require('express');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

logger.info(process.env.NODE_ENV);

const app = express();

require('./startup/config')();
require('./startup/routing')(app);
require('./startup/prod')(app);
require('./startup/db');

const port = process.env.PORT || config.get('port');
app.listen(port, () => {
    logger.info(`Running on port ${port}...`);
})