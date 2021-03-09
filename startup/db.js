const mongoose = require('mongoose');
const config = require('config');
const logger = require('./logging');

mongoose.connect(`mongodb+srv://${config.get('MONGODB_USERNAME')}:${config.get('MONGODB_PASSWORD')}@cluster0.hjifp.mongodb.net/${config.get('database.MONGODB_DBNAME')}?retryWrites=true&w=majority`, 
    { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => logger.info("Connected to MongoDB..."));

exports.mongoose = mongoose;