import { Link } from 'react-router-dom';
import { ReactComponent as CarLogo } from './assets/car-logo.svg';
import './Header.scss';

const Header = () => {
    return (
        <header className='header-wrapper'>
            <CarLogo />
            <Link to='/'>REACT A CAR</Link>
            {/* <ul className='logged-links'>
                    <Link to='/profile'>My Profile</Link>
                    <Link to='/about'>About Us</Link>
                </ul> */}
            <ul className='guest-links'>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </ul>
            {/* <button>LOGOUT</button> */}
        </header>
    );
};

export default Header;
