import Main from '../../layouts/Main';
import UserInformation from './UserInformation';
import UserOffers from './UserOffers';
import UserRentals from './UserRentals';
import './Profile.scss';

const Profile = () => {
    return (
        <Main>
            <UserInformation />
            <div>
                <UserOffers />
                <UserRentals />
            </div>
        </Main>
    );
};

export default Profile;
