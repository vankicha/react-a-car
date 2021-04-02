import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as CarLogo } from './assets/car-logo.svg';
import { connect } from 'react-redux';
import { getIsLogged } from '../../../../reducers/userReducer';
import { logout } from '../../../../actions/userActions';
import Button from '../../../shared/Button';
import './Header.scss';

const Header = ({ isLogged, logout }) => {
    const history = useHistory();

    const handleLogout = async () => {
        await logout();
        history.push('/offers');
    };

    return (
        <header className='header-wrapper'>
            <CarLogo />
            <Link to='/'>REACT A CAR</Link>

            {isLogged ? (
                <>
                    <ul className='list-left-links'>
                        <Link to='/profile'>My Profile</Link>
                        <Link to='/reviews'>Reviews</Link>
                        <Link to='/provide'>Provide a car</Link>
                    </ul>
                    <Button
                        className='button-white'
                        handlerClick={handleLogout}
                    >
                        LOGOUT
                    </Button>
                </>
            ) : (
                <ul className='guest-links'>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </ul>
            )}
        </header>
    );
};

const mapStateToProps = (state) => ({
    isLogged: getIsLogged(state),
});

const mapDispatchToProps = {
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
