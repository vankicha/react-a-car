import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import {
    addOfferToReviews,
    fetchUserReviews,
} from '../../../../../actions/userActions';
import { getUserId, getUserReviews } from '../../../../../reducers/userReducer';
import Button from '../../../../shared/Button';
import './Offer.scss';

const Offer = ({
    offer,
    userId,
    userReviews,
    addOfferToReviews,
    fetchUserReviews,
    setOpen,
}) => {
    const handleReviewLater = async (e) => {
        const offerId = e.currentTarget.dataset.id;
        await addOfferToReviews(userId, offerId);
        setOpen(true);
    };

    useEffect(() => {
        userId && fetchUserReviews(userId);
    }, [fetchUserReviews, userId]);

    return (
        <div className='offer-wrapper'>
            <Link to={`/offers/${offer._id}/details`}>
                <h3>
                    {offer.brand} <span>{offer.model}</span>
                </h3>
                <img src={offer.image} />
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
                {userId && !userReviews.find((x) => x._id === offer._id) && (
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

const mapStateToProps = (state) => ({
    userId: getUserId(state),
    userReviews: getUserReviews(state),
});

const mapDispatchToProps = { addOfferToReviews, fetchUserReviews };

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
