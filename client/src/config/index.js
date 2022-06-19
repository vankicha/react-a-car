const serverAddress = {
    development: 'http://localhost:5000/api',
    production: '<PLACEHOLDER>',
};

export const BASE_URL = serverAddress[process.env.NODE_ENV];

export const FIREBASE_CONFIG = {};

export const WEATHER_API_KEY = '';
export const VENUES_API_KEY = '';
