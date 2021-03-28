import './Offer.scss';

const Offer = ({ offer }) => {
    return (
        <div className='offer-wrapper'>
            <h3>
                {offer.brand} <span>{offer.model}</span>
            </h3>
            <img src={offer.image} />
            <span>AVAILABLE</span>
            <div>
                <span>${offer.pricePerHour}/hour</span>
            </div>
        </div>
    );
};

export default Offer;
