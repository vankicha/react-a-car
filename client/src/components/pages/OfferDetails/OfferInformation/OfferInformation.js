import Button from '../../../shared/Button';
import DropdownHours from './DropdownHours';
import DropdownRegions from './DropdownRegions';
import './OfferInformation.scss';

const OfferInformation = () => {
    return (
        <div className='offer-container'>
            <img
                src='https://firebasestorage.googleapis.com/v0/b/react-a-car.appspot.com/o/offers%2F720s.jpg0.18608752315966504?alt=media&token=e9de29d0-4dbd-41e8-9527-ff57073b9e71'
                alt='car'
            />
            <div className='offer-information'>
                <h3>Offer information</h3>
                <div className='car-specifications'>
                    <p>
                        Brand: <span>McLaren</span>
                    </p>
                    <p>
                        Model: <span>720S</span>
                    </p>
                    <p>
                        Year: <span>2018</span>
                    </p>
                    <p>
                        Price: <span>120$/hour</span>
                    </p>
                    <p>
                        Status: <span className='status'>AVAILABLE</span>
                    </p>

                    <div className='drop-down-hours'>
                        <p>Rent for:</p> <DropdownHours />
                    </div>
                    <div className='drop-down-regions'>
                        <p>Region:</p> <DropdownRegions />
                    </div>
                </div>
                <Button className='button-white'>RENT FOR $120</Button>
            </div>
        </div>
    );
};

export default OfferInformation;
