const { createLogger, format, transports } = require('winston');
// require('winston-mongodb');
// require('express-async-errors');

module.exports = createLogger({
  format: format.combine(
    format.json(),
    format.timestamp(),
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
      filename: 'log/logfile.log',
      level: 'info',
      handleRejections: true,
      format: format.combine(
        format.prettyPrint()
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
    new transports.File({ filename: 'log/uncaughtExceptions.log' }),
    new transports.Console({
      level: 'info',
      format: format.combine(
        format.colorize(),
        format.simple(),
      )
    }),
  ],
  // rejectionHandlers: [
  //   new transports.File({ filename: 'log/rejection.log' })
  // ]
});