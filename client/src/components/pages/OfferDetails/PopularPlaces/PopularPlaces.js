import { useContext } from 'react';
import { GeoContext } from '../../../../contexts/GeoContext';
import './PopularPlaces.scss';

const PopularPlaces = () => {
    const { venues } = useContext(GeoContext);

    return (
        <div className='popular-places-wrapper'>
            {venues.loaded && (
                <>
                    <h3>
                        Popular places in <span>{venues.cityName}</span>
                    </h3>
                    {venues.list.map((x) => (
                        <div key={x.id} className='place-content'>
                            <p>{x.name}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default PopularPlaces;
