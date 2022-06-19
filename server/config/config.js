const environment = process.env.NODE_ENV
    ? process.env.NODE_ENV.trim()
    : 'production';

const config = {
    development: {
        PORT: process.env.PORT || 5000,
        DB_CONNECTION:
            '<STRING_HERE>',
        SALT_ROUNDS: 1,
    },
    production: {
        PORT: 80,
        DB_CONNECTION:
            '<STRING_HERE>',
        SALT_ROUNDS: 5,
    },
};

module.exports = config[environment];
