import { placeApi } from './api';

export default {
    getVenues: (cityName, date) => fetch(placeApi.getVenues(cityName, date)),
};
