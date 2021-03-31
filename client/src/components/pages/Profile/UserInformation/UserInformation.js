import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import {
    getUsername,
    getUserPhoto,
    getUserEmail,
    getUserBalance,
    getUserId,
} from '../../../../reducers/userReducer';
import { updateUserPhoto } from '../../../../actions/userActions';
import { ReactComponent as DefaultProfileLogo } from '../../assets/default-profile-logo.svg';
import UploadPhotoButton from '../../../shared/UploadPhotoButton';
import Button from '../../../shared/Button';
import DepositForm from './DepositForm';
import './UserInformation.scss';

const UserInformation = ({
    userPhotoUrl,
    fullName,
    email,
    balance,
    userId,
    updateUserPhoto,
}) => {
    const [expandDepositForm, setExpandDepositForm] = useState(false);
    const [photoUrl, setPhotoUrl] = useState(userPhotoUrl);

    useEffect(() => {
        if (photoUrl && photoUrl !== userPhotoUrl) {
            updateUserPhoto(userId, photoUrl);
        }
    }, [photoUrl, userPhotoUrl]);

    const onDepositClick = () => {
        setExpandDepositForm((prevState) => setExpandDepositForm(!prevState));
    };

    return (
        <aside className='user-information-wrapper'>
            <div className='user-profile-picture'>
                {userPhotoUrl ? (
                    <img src={userPhotoUrl} alt='logo' />
                ) : (
                    <DefaultProfileLogo />
                )}
            </div>
            <UploadPhotoButton
                setPhotoUrl={setPhotoUrl}
                storageFolder='users/'
                textContent='CHANGE PROFILE PICTURE'
            />
            <div className='user-credentials'>
                <p>
                    Name: <span>{fullName}</span>
                </p>
                <p>
                    Email: <span>{email}</span>
                </p>
                <p>
                    Balance: <span>${balance}</span>
                </p>
            </div>
            <Button className='button-white' handlerClick={onDepositClick}>
                DEPOSIT
            </Button>
            {expandDepositForm && <DepositForm />}
        </aside>
    );
};

const mapStateToProps = (state) => ({
    fullName: getUsername(state),
    userPhotoUrl: getUserPhoto(state),
    email: getUserEmail(state),
    balance: getUserBalance(state),
    userId: getUserId(state),
});

const mapDispatchToProps = {
    updateUserPhoto,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);
