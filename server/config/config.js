const config = {
    development: {
        PORT: 5000,
        DB_CONNECTION: 'mongodb+srv://admin:admin@cluster0.hxzyr.mongodb.net/react-a-car',
    },
    production: {
        PORT: 80,
        DB_CONNECTION: 'mongodb+srv://admin:admin@cluster0.hxzyr.mongodb.net/react-a-car',
    },
};

module.exports = config[process.env.NODE_ENV.trim()];