import { Link } from 'react-router-dom';
import { ReactComponent as DefaultProfileLogo } from '../../assets/default-profile-logo.svg';
import './ProviderProfile.scss';

const ProviderProfile = ({ provider }) => {
    return (
        <aside className='provider-profile-wrapper'>
            <div className='provider-picture'>
                {provider.photoUrl ? (
                    <img src={provider.photoUrl} alt='logo' />
                ) : (
                    <DefaultProfileLogo />
                )}
            </div>
            <h3>{`${provider.firstName} ${provider.lastName}`}</h3>
            <p>More from this provider</p>
            <ul className='latest-offers'>
                {provider.offers.map((x) => (
                    <Link key={x._id} to={`/offers/${x._id}/details`}>
                        {`${x.brand} ${x.model} `}
                        <span>${x.pricePerHour}/hour</span>
                    </Link>
                ))}
            </ul>
        </aside>
    );
};

export default ProviderProfile;
