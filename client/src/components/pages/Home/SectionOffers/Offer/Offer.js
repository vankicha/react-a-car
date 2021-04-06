import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addOfferToReviews } from '../../../../../actions/userActions';
import Button from '../../../../shared/Button';
import './Offer.scss';

const Offer = ({ offer, userId, reviews, addOfferToReviews, setOpen }) => {
    const handleReviewLater = async (e) => {
        const offerId = e.currentTarget.dataset.id;
        await addOfferToReviews(userId, offerId);
        setOpen(true);
    };

    return (
        <div className='offer-wrapper'>
            <Link to={`/offers/${offer._id}/details`}>
                <h3>
                    {offer.brand} <span>{offer.model}</span>
                </h3>
                <img src={offer.image} alt='car' />
            </Link>
            <div className='offer-brief-info'>
                <span
                    className={`offer-availability ${
                        !offer.isAvailable && 'forbidden'
                    }`}
                >
                    {!offer.isAvailable && 'Not'} Available
                </span>
                <span className='offer-price'>${offer.pricePerHour}/hour</span>
                {userId && !reviews.find((x) => x._id === offer._id) && (
                    <Button
                        dataId={offer._id}
                        className='button-black'
                        handlerClick={handleReviewLater}
                    >
                        REVIEW LATER
                    </Button>
                )}
            </div>
        </div>
    );
};

const mapDispatchToProps = { addOfferToReviews };

export default connect(null, mapDispatchToProps)(Offer);
