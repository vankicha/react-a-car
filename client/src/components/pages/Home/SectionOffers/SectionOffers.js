import Offer from './Offer';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserReviews } from '../../../../actions/userActions';
import { getUserId, getUserReviews } from '../../../../reducers/userReducer';
import './SectionOffers.scss';

const SectionOffers = ({
    offers,
    setOpen,
    open,
    reviews,
    userId,
    fetchUserReviews,
}) => {
    useEffect(() => {
        userId && fetchUserReviews(userId);
    }, [fetchUserReviews, userId]);

    return (
        <div className='section-offers-wrapper'>
            {offers.map((x) => (
                <Offer
                    key={x._id}
                    offer={x}
                    setOpen={setOpen}
                    open={open}
                    reviews={reviews}
                    userId={userId}
                />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    reviews: getUserReviews(state),
    userId: getUserId(state),
});

const mapDispatchToProps = {
    fetchUserReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionOffers);
