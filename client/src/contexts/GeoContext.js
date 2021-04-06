import { useState, createContext } from 'react';
import weatherService from '../services/weatherService';
import placeService from '../services/placeService';

export const GeoContext = createContext();

const GeoContextProvider = ({ children }) => {
    const [forecastInfo, setForecastInfo] = useState({});
    const [venues, setVenues] = useState({});

    const getTodayForecast = (cityName) => {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            let response;
            let data;

            if (!cityName) {
                const { latitude, longitude } = pos.coords;

                response = await weatherService.getLocationKeyByGeoPosition(
                    latitude,
                    longitude
                );

                data = await response.json();
            } else {
                response = await weatherService.getLocationKeyByCityName(
                    cityName
                );

                data = (await response.json())[0];
            }

            let { Key: locationKey, LocalizedName: locationName } = data;

            const resForecast = await weatherService.getTodayForecast(
                locationKey
            );
            const { DailyForecasts } = await resForecast.json();

            const todayForecast = DailyForecasts.pop();

            setForecastInfo({
                locationName,
                day: {
                    icon:
                        todayForecast.Day.Icon.toString().length === 1
                            ? '0' + todayForecast.Day.Icon
                            : todayForecast.Day.Icon.toString(),
                    phrase: todayForecast.Day.IconPhrase,
                },
                night: {
                    icon:
                        todayForecast.Night.Icon.toString().length === 1
                            ? '0' + todayForecast.Night.Icon
                            : todayForecast.Night.Icon.toString(),
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

    const getVenues = async (cityName) => {
        const dateObj = new Date();
        const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
        const day = ('0' + dateObj.getDate()).slice(-2);
        const year = dateObj.getFullYear();
        const date = `${year}${month}${day}`;

        const response = await placeService.getVenues(cityName, date);
        let data = await response.json();

        data = data.response.groups[0].items.map((x) => ({
            name: x.venue.name,
            id: x.venue.id,
        }));

        setVenues({ list: data, cityName, loaded: true });
    };

    return (
        <GeoContext.Provider
            value={{ getTodayForecast, getVenues, venues, forecastInfo }}
        >
            {children}
        </GeoContext.Provider>
    );
};

export default GeoContextProvider;
