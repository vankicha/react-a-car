const environment = process.env.NODE_ENV
    ? process.env.NODE_ENV.trim()
    : 'production';

const config = {
    development: {
        PORT: process.env.PORT || 5000,
        DB_CONNECTION:
            'mongodb+srv://admin:admin@cluster0.hxzyr.mongodb.net/react-a-car',
        SALT_ROUNDS: 1,
    },
    production: {
        PORT: 80,
        DB_CONNECTION:
            'mongodb+srv://admin:admin@cluster0.hxzyr.mongodb.net/react-a-car',
        SALT_ROUNDS: 5,
    },
};

module.exports = config[environment];
