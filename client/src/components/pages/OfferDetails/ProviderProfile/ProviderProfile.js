import { Link } from 'react-router-dom';
import './ProviderProfile.scss';

const ProviderProfile = () => {
    return (
        <aside className='provider-profile-wrapper'>
            <div className='provider-picture'>
                <img src='https://lh3.googleusercontent.com/proxy/pAwPTjGzVw3obC156ionikLrOfkmYYs-a65E_ENyFrTD_-5FVR54W5sHdZ7ig0qBFAe4X8gP5A12288djX1M5WOPVBnpOZW-nmab-02JVR6f7XM8WWFhrnfbe5keL1-cUx0' />
            </div>
            <h3>User User</h3>
            <p>Latest from this provider</p>
            <ul className='latest-offers'>
                <Link to='#'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/react-a-car.appspot.com/o/offers%2F720s.jpg0.18608752315966504?alt=media&token=e9de29d0-4dbd-41e8-9527-ff57073b9e71'></img>
                </Link>
                <Link to='#'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/react-a-car.appspot.com/o/offers%2F720s.jpg0.18608752315966504?alt=media&token=e9de29d0-4dbd-41e8-9527-ff57073b9e71'></img>
                </Link>
                <Link to='#'>
                    <img src='https://firebasestorage.googleapis.com/v0/b/react-a-car.appspot.com/o/offers%2F720s.jpg0.18608752315966504?alt=media&token=e9de29d0-4dbd-41e8-9527-ff57073b9e71'></img>
                </Link>
            </ul>
        </aside>
    );
};

export default ProviderProfile;
