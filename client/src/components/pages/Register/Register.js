import Main from '../../layouts/Main';
import RegisterForm from './RegisterForm';
import './Register.scss';

const Register = () => {
    return (
        <Main>
            <div className='register-forms-wrapper'>
                <h1>Register</h1>
                <RegisterForm />
            </div>
        </Main>
    );
};

export default Register;
