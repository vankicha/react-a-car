import Main from '../../layouts/Main';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserId, getUserReviews } from '../../../reducers/userReducer';
import {
    fetchUserReviews,
    removeOfferFromReviews,
} from '../../../actions/userActions';
import Button from '../../shared/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import './Reviews.scss';

const Reviews = ({
    userReviews,
    userId,
    fetchUserReviews,
    removeOfferFromReviews,
}) => {
    useEffect(() => {
        userId && fetchUserReviews(userId);
    }, [fetchUserReviews, userId]);

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleRemoveFromReviews = async (e) => {
        const offerId = e.currentTarget.dataset.id;
        await removeOfferFromReviews(userId, offerId);
        setOpen(true);
    };

    return (
        <Main>
            <div className='reviews-wrapper'>
                <h3>Reviews</h3>
                <div className='user-reviews'>
                    {userReviews.map((x) => (
                        <div key={x._id} className='review-offer-content'>
                            <Link to={`/offers/${x._id}/details`}>
                                <h5>{`${x.brand} ${x.model}`}</h5>
                                <img src={x.image} />
                            </Link>
                            <Button
                                key={x._id}
                                dataId={x._id}
                                className='button-black'
                                handlerClick={handleRemoveFromReviews}
                            >
                                REMOVE
                            </Button>
                        </div>
                    ))}
                </div>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity='success'
                        variant='filled'
                    >
                        Removed from reviews!
                    </Alert>
                </Snackbar>
            </div>
        </Main>
    );
};

const mapStateToProps = (state) => ({
    userId: getUserId(state),
    userReviews: getUserReviews(state),
});

const mapDispatchToProps = {
    fetchUserReviews,
    removeOfferFromReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
