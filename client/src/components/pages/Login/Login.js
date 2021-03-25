import Main from '../../layouts/Main';
import LoginForm from './LoginForm';
import './Login.scss';

const Login = () => {
    return (
        <Main>
            <div className='login-form-wrapper'>
                <h1>Login</h1>
                <LoginForm />
            </div>
        </Main>
    );
};

export default Login;
