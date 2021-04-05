import Button from '../../../shared/Button';
import DropdownHours from './DropdownHours';
import DropdownRegions from './DropdownRegions';
import CarSpecifications from './CarSpecifications';
import AlertBox from '../../../shared/AlertBox';
import {
    getIsLogged,
    getUserId,
    getUserBalance,
} from '../../../../reducers/userReducer';
import { rentCar } from '../../../../actions/userActions';
import { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { validateRent } from '../../../../helpers/validators';
import { GeoContext } from '../../../../contexts/GeoContext';
import './OfferInformation.scss';

const OfferInformation = ({
    offer,
    isLogged,
    userId,
    rentCar,
    balance,
    setShow,
}) => {
    const [hours, setHours] = useState('');
    const [region, setRegion] = useState('');
    const [currentPrice, setCurrentPrice] = useState(offer.pricePerHour);
    const [error, setError] = useState('');
    const { getTodayForecast, getVenues } = useContext(GeoContext);
    const history = useHistory();

    useEffect(() => {
        setHours('');
        setRegion('');
        setCurrentPrice(offer.pricePerHour);
    }, [offer]);

    const handleRegionChange = async (event) => {
        setRegion(event.target.value);
        if (event.target.value) {
            await getVenues(event.target.value);
            await getTodayForecast(event.target.value);
            setShow(true);
        } else {
            setShow(false);
        }
    };

    const handleHoursChange = (event) => {
        setHours(event.target.value);
        setCurrentPrice(offer.pricePerHour * event.target.value);
    };

    const handleUserRent = async () => {
        try {
            validateRent(
                userId,
                offer.provider._id,
                balance,
                currentPrice,
                hours,
                region
            );

            await rentCar(
                userId,
                offer.provider._id,
                offer._id,
                currentPrice,
                hours
            );

            history.push('/offers');
        } catch (error) {
            setError(error.message);
            setTimeout(() => setError(''), 3000);
        }
    };

    return (
        <>
            <div className='offer-container'>
                <img src={offer.image} alt='car' />
                <div className='offer-information'>
                    <h3>Offer information</h3>
                    <CarSpecifications offer={offer} />

                    {offer.isAvailable && (
                        <>
                            <div className='drop-down-hours'>
                                <p>Rent for:</p>
                                <DropdownHours
                                    hours={hours}
                                    handleHoursChange={handleHoursChange}
                                />
                            </div>
                            <div className='drop-down-regions'>
                                <p>Region:</p>
                                <DropdownRegions
                                    region={region}
                                    handleRegionChange={handleRegionChange}
                                />
                            </div>
                            <Button
                                handlerClick={handleUserRent}
                                className='button-white'
                                disabled={!isLogged}
                            >
                                RENT {hours && `FOR $${currentPrice}`}
                            </Button>
                            {!isLogged && (
                                <AlertBox severity='info'>
                                    You need to be logged to rent a car!
                                </AlertBox>
                            )}

                            {error && (
                                <AlertBox severity='error'>{error}</AlertBox>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    isLogged: getIsLogged(state),
    userId: getUserId(state),
    balance: getUserBalance(state),
});

const mapDispatchToProps = {
    rentCar,
};

export default connect(mapStateToProps, mapDispatchToProps)(OfferInformation);
