import { weatherApi } from './api';

export default {
    getLocationKeyByGeoPosition: (lat, lon) =>
        fetch(weatherApi.getLocationKeyByGeoPosition(lat, lon)),
    getLocationKeyByCityName: (cityName) =>
        fetch(weatherApi.getLocationKeyByCityName(cityName)),
    getTodayForecast: (locationKey) =>
        fetch(weatherApi.getTodayForecast(locationKey)),
};
