import Main from '../../layouts/Main';
import UserInformation from './UserInformation';
import UserOffers from './UserOffers';
import './Profile.scss';

const Profile = () => {
    return (
        <Main>
            <UserInformation />
            <UserOffers />
        </Main>
    );
};

export default Profile;
