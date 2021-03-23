import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <Navbar>
                <Navbar.Brand>
                    <Link to='/'>REACT A CAR</Link>
                </Navbar.Brand>
                <ul className='logged-links'>
                    <Link to='/profile'>My Profile</Link>
                    <Link to='/about'>About Us</Link>
                </ul>
                {/* <ul className='guest-links'>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </ul> */}
                <button>LOGOUT</button>
            </Navbar>
        </header>
    );
};

export default Header;
