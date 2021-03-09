const { createLogger, format, transports } = require('winston');
// require('winston-mongodb');
require('express-async-errors');

module.exports = createLogger({
  format: format.combine(
    format.json(),
    format.timestamp(),
    format.prettyPrint()
  ),
  transports: [
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.colorize(),
        format.simple(),
      )
    }),
    new transports.File({
      filename: 'log/info.log',
      level: 'info',
      handleRejections: true,
    }),
    new transports.File({
      filename: 'log/error.log',
      level: 'error',
      handleRejections: true,
      format: format.combine(
        format.colorize(),
      )
    }),
    // new transports.MongoDB({
    //   db: "mongodb://localhost:27017/jazzb_error_logs",
    //   collection:'log',
    //   options: { useUnifiedTopology: true },
    //   level: 'info',
    // })
  ],
  exceptionHandlers: [
    new transports.File({ filename: 'log/error.log' }),
    new transports.Console({
      level: 'error',
      format: format.combine(
        format.colorize(),
      )
    }),
  ],
  // rejectionHandlers: [
  //   new transports.File({ filename: 'log/rejection.log' })
  // ]
});