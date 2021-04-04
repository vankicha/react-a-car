import { useState, useEffect, createContext } from 'react';
import weatherService from '../services/weatherService';

export const GeoContext = createContext();

const GeoContextProvider = ({ children }) => {
    const [forecastInfo, setForecastInfo] = useState({});

    const getTodayForecast = (cityName) => {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            let response;

            if (!cityName) {
                const { latitude, longitude } = pos.coords;

                response = await weatherService.getLocationKeyByGeoPosition(
                    latitude,
                    longitude
                );
            } else {
                response = await weatherService.getLocationKeyByCityName(
                    cityName
                );
            }

            let {
                Key: locationKey,
                LocalizedName: locationName,
            } = await response.json();

            const resForecast = await weatherService.getTodayForecast(
                locationKey
            );
            const { DailyForecasts } = await resForecast.json();

            const todayForecast = DailyForecasts.pop();

            setForecastInfo({
                locationName,
                day: {
                    icon: todayForecast.Day.Icon,
                    phrase: todayForecast.Day.IconPhrase,
                },
                night: {
                    icon: todayForecast.Night.Icon,
                    phrase: todayForecast.Night.IconPhrase,
                },
                temperature: {
                    max: todayForecast.Temperature.Maximum.Value,
                    min: todayForecast.Temperature.Minimum.Value,
                },
                loaded: true,
            });
        });
    };

    return (
        <GeoContext.Provider value={{ getTodayForecast, forecastInfo }}>
            {children}
        </GeoContext.Provider>
    );
};

export default GeoContextProvider;
