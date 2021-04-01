import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUserId, getUserOffers } from '../../../../reducers/userReducer';
import { fetchUserOffers } from '../../../../actions/userActions';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '../../../shared/Button';
import ConfirmationDialog from './ConfirmationDialog';
import './UserOffers.scss';

const UserOffers = ({ userId, userOffers, fetchUserOffers }) => {
    const [skipCount, setSkipCount] = useState(0);
    const [currentId, setCurrentId] = useState('');
    const [open, setOpen] = useState(false);

    const onBackwardClick = () => {
        setSkipCount((prevState) => prevState - 3);
    };

    const onForwardClick = () => {
        setSkipCount((prevState) => prevState + 3);
    };

    const handleDeleteOffer = (e) => {
        setCurrentId(e.currentTarget.dataset.id);
        setOpen(true);
    };

    useEffect(() => {
        userId && fetchUserOffers(userId);
    }, [fetchUserOffers, userId]);

    return (
        <div className='user-offers-wrapper'>
            <h3>Your offers</h3>
            <div className='user-offers'>
                {skipCount > 0 && (
                    <ArrowBackIosIcon onClick={onBackwardClick} />
                )}
                {userOffers.slice(skipCount, skipCount + 3).map((x) => (
                    <div key={x._id} className='offer-content'>
                        <h5>{`${x.brand} ${x.model}`}</h5>
                        <img src={x.image} />
                        <Button
                            dataId={x._id}
                            className='button-white'
                            handlerClick={handleDeleteOffer}
                        >
                            DELETE
                        </Button>
                    </div>
                ))}
                {skipCount !== userOffers.length - 1 && (
                    <ArrowForwardIosIcon onClick={onForwardClick} />
                )}
                <ConfirmationDialog
                    open={open}
                    setOpen={setOpen}
                    offerId={currentId}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    userOffers: getUserOffers(state),
    userId: getUserId(state),
});

const mapDispatchToProps = { fetchUserOffers };

export default connect(mapStateToProps, mapDispatchToProps)(UserOffers);
