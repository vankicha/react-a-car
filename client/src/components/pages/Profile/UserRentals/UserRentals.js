import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserId, getUserRentals } from '../../../../reducers/userReducer';
import { fetchUserRentals } from '../../../../actions/userActions';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './UserRentals.scss';

const UserRentals = ({ userId, fetchUserRentals, userRentals }) => {
    const [skipCount, setSkipCount] = useState(0);
    const pages = Math.ceil(userRentals.length / 3);

    const onBackwardClick = () => {
        setSkipCount((prevState) => prevState - 3);
    };

    const onForwardClick = () => {
        setSkipCount((prevState) => prevState + 3);
    };

    useEffect(() => {
        userId && fetchUserRentals(userId);
    }, [fetchUserRentals, userId]);

    return (
        <div className='user-rentals-wrapper'>
            <h3>Your rentals</h3>
            <div className='user-rentals'>
                {skipCount > 0 && (
                    <ArrowBackIosIcon onClick={onBackwardClick} />
                )}
                {userRentals.length > 0 ? (
                    userRentals.slice(skipCount, skipCount + 3).map((x) => (
                        <div key={x._id} className='offer-content'>
                            <h5>{`${x.brand} ${x.model}`}</h5>
                            <img src={x.image} />
                            <Link to={`/offers/${x._id}/details`}>
                                VIEW DETAILS
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className='no-rentals-content'>
                        <span>YOU DON'T HAVE RENTALS...</span>
                        <Link to='/offers'>LOOK TROUGH THE OFFERS</Link>
                    </div>
                )}
                {Math.ceil(skipCount / 3) + 1 < pages && (
                    <ArrowForwardIosIcon onClick={onForwardClick} />
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    userRentals: getUserRentals(state),
    userId: getUserId(state),
});

const mapDispatchToProps = {
    fetchUserRentals,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRentals);
