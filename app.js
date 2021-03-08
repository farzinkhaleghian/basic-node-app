const config = require('config');
const logger = require('./startup/logging');

logger.info(process.env.NODE_ENV);
const p = Promise.reject(new Error('THISIS Faild'));
