import Main from '../../layouts/Main';
import UserForm from './UserForm';
import CompanyForm from './CompanyForm';
import './Register.scss';

const Register = () => {
    return (
        <Main>
            <div className='form-wrapper'>
                <h1>Register</h1>
                <p className='title-helper'>as</p>
                <div className='form-content'>
                    <UserForm />
                    <CompanyForm />
                </div>
            </div>
        </Main>
    );
};

export default Register;
