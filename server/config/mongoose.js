const mongoose = require('mongoose');
const config = require('./config');

function setupMongoose(app) {
    mongoose.connect(config.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', console.log.bind(console, 'Database connected...'));
}

module.exports = setupMongoose;
