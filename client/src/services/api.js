import { VENUES_API_KEY, WEATHER_API_KEY } from '../config';

const BASE_URL = 'http://localhost:5000/api';
const USER_URL = `${BASE_URL}/users`;
const AUTH_URL = `${BASE_URL}/auth`;
const OFFERS_URL = `${BASE_URL}/offers`;
const ACCUWEATHER_URL = `http://dataservice.accuweather.com`;

export const authApi = {
    register: () => `${AUTH_URL}/register`,
};

export const offerApi = {
    create: () => `${OFFERS_URL}`,
    getAll: (page) => `${OFFERS_URL}?page=${page}`,
    getOne: (offerId) => `${OFFERS_URL}/${offerId}`,
    updateOffer: (offerId) => `${OFFERS_URL}/${offerId}`,
};

export const userApi = {
    getUserInfo: (userId) =>
        `${USER_URL}/${userId}?fields=balance,firstName,lastName,photoUrl`,
    rentCar: (userId) => `${USER_URL}/${userId}/rentals`,
    updateUserPhoto: (userId) => `${USER_URL}/${userId}/photo`,
    deposit: (userId) => `${USER_URL}/${userId}/balance?action=deposit`,
    getUserOffers: (userId) => `${USER_URL}/${userId}?fields=offers`,
    deleteOffer: (userId, offerId) => `${USER_URL}/${userId}/offers/${offerId}`,
    getUserRentals: (userId) => `${USER_URL}/${userId}?fields=rentals`,
    getUserReviews: (userId) => `${USER_URL}/${userId}?fields=reviews`,
    addOfferToReviews: (userId) => `${USER_URL}/${userId}/reviews?action=add`,
    removeOfferFromReviews: (userId, offerId) =>
        `${USER_URL}/${userId}/reviews/${offerId}`,
};

export const weatherApi = {
    getLocationKeyByGeoPosition: (lat, lon) =>
        `${ACCUWEATHER_URL}/locations/v1/cities/geoposition/search?apikey=${WEATHER_API_KEY}&q=${lat}%2C${lon}&toplevel=true`,
    getLocationKeyByCityName: (cityName) =>
        `${ACCUWEATHER_URL}/locations/v1/search?apikey=${WEATHER_API_KEY}&q=${cityName}`,
    getTodayForecast: (locationKey) =>
        `${ACCUWEATHER_URL}/forecasts/v1/daily/1day/${locationKey}?apikey=${WEATHER_API_KEY}&metric=true`,
};
