import { connect } from 'react-redux';
import { useState } from 'react';
import {
    getUsername,
    getUserPhoto,
    getUserEmail,
    getUserBalance,
} from '../../../../reducers/userReducer';
import { ReactComponent as DefaultProfileLogo } from '../../assets/default-profile-logo.svg';
import UploadPhotoButton from '../../../shared/UploadPhotoButton';
import Button from '../../../shared/Button';
import DepositForm from './DepositForm';
import './UserInformation.scss';

const UserInformation = ({ photoUrl, fullName, email, balance }) => {
    const [expandDepositForm, setexpandDepositForm] = useState(false);

    const onDepositClick = () => {
        setexpandDepositForm((prevState) => setexpandDepositForm(!prevState));
    };

    return (
        <aside className='user-information-wrapper'>
            <div className='user-profile-picture'>
                {photoUrl ? (
                    <img src={photoUrl} alt='logo' />
                ) : (
                    <DefaultProfileLogo />
                )}
            </div>
            <UploadPhotoButton
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
    photoUrl: getUserPhoto(state),
    email: getUserEmail(state),
    balance: getUserBalance(state),
});

export default connect(mapStateToProps)(UserInformation);
