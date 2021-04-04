import { connect } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputField from '../../../shared/InputField';
import Button from '../../../shared/Button';
import AlertBox from '../../../shared/AlertBox';
import Loader from '../../../shared/Loader';
import useForm from '../../../../hooks/useForm';
import { login } from '../../../../actions/userActions';
import {
    firebaseErrorHandler,
    validateLoginForm,
} from '../../../../helpers/validators';
import './LoginForm.scss';

const LoginForm = ({ login }) => {
    const [values, setValues] = useForm({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setError('');
            validateLoginForm(values.email, values.password);
            setIsLoading(true);
            await login(values.email, values.password);
            setIsLoading(false);
            history.push('/offers');
        } catch (error) {
            setIsLoading(false);
            error.code
                ? firebaseErrorHandler(error, setError)
                : setError(error.message);
        }
    };

    return (
        <>
            {error && <AlertBox severity='error'>{error}</AlertBox>}
            {isLoading && <Loader />}
            <div className='login-form'>
                <form onSubmit={handleLogin}>
                    <InputField
                        name='email'
                        value={values.email}
                        onChange={setValues}
                        labelWidth={50}
                        type='email'
                        id='email'
                    >
                        Email
                    </InputField>
                    <InputField
                        name='password'
                        value={values.password}
                        onChange={setValues}
                        labelWidth={70}
                        type='password'
                        id='password'
                    >
                        Password
                    </InputField>
                    <Button className='button-white'>LOGIN</Button>
                </form>
            </div>
        </>
    );
};

const mapDispatchToProps = {
    login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
