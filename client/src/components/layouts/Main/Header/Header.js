import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className='header-wrapper'>
            <span>REACT A CAR</span>
            <ul>
                <li>Login</li>
                <li>Register</li>
            </ul>
        </header>
    );
};

export default Header;
