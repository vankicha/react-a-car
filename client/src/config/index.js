const serverAddress = {
    development: 'http://localhost:5000/api',
    production: 'https://react-a-car.herokuapp.com/api',
};

export const BASE_URL = serverAddress[process.env.NODE_ENV];

export const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyBx0TM6aCB5WRIN1H9JfAHjQgFMIomATd0',
    authDomain: 'react-a-car.firebaseapp.com',
    projectId: 'react-a-car',
    storageBucket: 'react-a-car.appspot.com',
    messagingSenderId: '379075921644',
    appId: '1:379075921644:web:bd7a9b83b14f0eb77a87c9',
    measurementId: "G-TJS4T6R87F"
};

export const WEATHER_API_KEY = 'doNboSV5Xg34yLMeWUfudme3AOxaAPYg';
export const VENUES_API_KEY =
    'client_id=0EF4FHYB5ICZP5QY4FNAL3SUQXTF5WTPULL1J0T1MDCRVETT&client_secret=CZP511NH2RR05CEFCG1APTVSWAVPB13AFGDQEL20XH5XIZSY';
