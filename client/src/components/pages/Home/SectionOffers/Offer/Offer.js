import { Link } from 'react-router-dom';
import './Offer.scss';

const Offer = ({ offer }) => {
    return (
        <div className='offer-wrapper'>
            <Link to={`/offers/${offer._id}/details`}>
                <h3>
                    {offer.brand} <span>{offer.model}</span>
                </h3>
                <img src={offer.image} />
                <div className='offer-brief-info'>
                    <span
                        className={`offer-availability ${
                            !offer.isAvailable && 'forbidden'
                        }`}
                    >
                        {!offer.isAvailable && 'Not'} Available
                    </span>
                    <span className='offer-price'>
                        ${offer.pricePerHour}/hour
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default Offer;
