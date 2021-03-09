const config = require('config');
const logger = require('./startup/logging');
const express = require('express');

logger.info(process.env.NODE_ENV);

const app = express();

require('./startup/routing')(app);
require('./startup/prod')(app);

const port = process.env.PORT || config.get('port');
app.listen(port, () => {
    logger.info(`Running on port ${port}...`);
})