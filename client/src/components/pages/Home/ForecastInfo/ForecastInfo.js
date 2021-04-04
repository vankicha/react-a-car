import { useContext, useEffect } from 'react';
import { GeoContext } from '../../../../contexts/GeoContext';
import './ForecastInfo.scss';

const ForecastInfo = () => {
    const { getTodayForecast, forecastInfo } = useContext(GeoContext);

    useEffect(() => {
        getTodayForecast();
    }, []);

    console.log(forecastInfo);

    return (
        <div className='forecast-info-wrapper'>
            {forecastInfo.loaded && (
                <>
                    <h3>Today in {forecastInfo.locationName}</h3>
                    <div className='forecast-box'>
                        <div className='forecast-image'>
                            <h5>Day</h5>
                            <img
                                src={`https://developer.accuweather.com/sites/default/files/${forecastInfo.day.icon}-s.png`}
                            />
                        </div>
                        <p>{forecastInfo.day.phrase}</p>
                    </div>
                    <div className='forecast-box'>
                        <div className='forecast-image'>
                            <h5>Night</h5>
                            <img
                                src={`https://developer.accuweather.com/sites/default/files/${forecastInfo.night.icon}-s.png`}
                            />
                        </div>
                        <p>{forecastInfo.night.phrase}</p>
                    </div>
                    <div className='forecast-temperature-box'>
                        <h5>Maximum</h5>
                        <p>{Math.ceil(forecastInfo.temperature.max)}&#8451;</p>
                    </div>
                    <div className='forecast-temperature-box'>
                        <h5>Minimum</h5>
                        <p>{Math.ceil(forecastInfo.temperature.min)}&#8451;</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default ForecastInfo;
