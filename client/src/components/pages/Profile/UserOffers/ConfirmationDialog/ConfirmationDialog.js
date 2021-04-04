import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { deleteOffer } from '../../../../../actions/userActions';
import { getUserId } from '../../../../../reducers/userReducer';

const ConfirmationDialog = ({
    open,
    setOpen,
    offerId,
    userId,
    deleteOffer,
    setSkipCount,
}) => {
    const handleClose = () => {
        setOpen(false);
    };

    const onConfirmationDelete = async () => {
        await deleteOffer(userId, offerId);
        setOpen(false);
        setSkipCount(0);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>
                    {'Are you sure you want to delete this offer?'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                        By giving your confirmation, you need to know that the
                        offer can't be restored and it will be deleted forever.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>
                        CANCEL
                    </Button>
                    <Button onClick={onConfirmationDelete} color='secondary'>
                        CONFIRM
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

const mapStateToProps = (state) => ({
    userId: getUserId(state),
});

const mapDispatchToProps = {
    deleteOffer,
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationDialog);
