import { Link } from 'react-router-dom';
import { ReactComponent as DefaultProfileLogo } from './assets/default-profile-logo.svg';
import './ProviderProfile.scss';

const ProviderProfile = () => {
    return (
        <aside className='provider-profile-wrapper'>
            <div className='provider-picture'>
                <DefaultProfileLogo />
                {/* <img src='https://icon-library.net/images/icon-profile/icon-profile-20.jpg' alt='logo' /> */}
            </div>
            <h3>User User</h3>
            <p>More from this provider</p>
            <ul className='latest-offers'>
                <Link to='#'>
                    Lamborghini Huracan <span>$120/hour</span>
                </Link>
                <Link to='#'>
                    Ferrari F8 Spider <span>$120/hour</span>
                </Link>
                <Link to='#'>
                    Porsche GT3RS <span>$120/hour</span>
                </Link>
                <Link to='#'>
                    Porsche GT3RS <span>$120/hour</span>
                </Link>
                <Link to='#'>
                    Porsche GT3RS <span>$120/hour</span>
                </Link>
            </ul>
        </aside>
    );
};

export default ProviderProfile;
