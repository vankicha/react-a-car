import { connect } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputField from '../../../shared/InputField';
import Button from '../../../shared/Button';
import useForm from '../../../../hooks/useForm';
import { register, login } from '../../../../actions/userActions';
import { validateRegisterForm } from '../../../../helpers/validators';
import Loader from '../../../shared/Loader';
import './RegisterForm.scss';

const UserForm = ({ register, login }) => {
    const [values, setValues] = useForm({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        balance: 0,
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleRegisterUser = async (e) => {
        e.preventDefault();
        setErrors({});
        try {
            validateRegisterForm(values);
            setIsLoading(true);
            await register({ ...values });
            await login(values.email, values.password);
            setIsLoading(false);
            history.push('/offers');
        } catch (err) {
            setIsLoading(false);
            setErrors({ ...err });
        }
    };

    return (
        <div className='user-form-wrapper'>
            {isLoading && <Loader />}
            <form onSubmit={handleRegisterUser}>
                <InputField
                    value={values.email}
                    name='email'
                    onChange={setValues}
                    labelWidth={50}
                    type='email'
                    id='email'
                    error={(errors.email || errors.message) && true}
                    helperText={errors.email || errors.message}
                >
                    Email
                </InputField>
                <InputField
                    value={values.firstName}
                    name='firstName'
                    onChange={setValues}
                    labelWidth={80}
                    type='text'
                    id='firstName'
                    error={errors.firstName && true}
                    helperText={errors.firstName}
                >
                    First Name
                </InputField>

                <InputField
                    value={values.lastName}
                    name='lastName'
                    onChange={setValues}
                    labelWidth={80}
                    type='text'
                    id='lastName'
                    error={errors.lastName && true}
                    helperText={errors.lastName}
                >
                    Last Name
                </InputField>

                <InputField
                    name='password'
                    value={values.password}
                    onChange={setValues}
                    labelWidth={70}
                    type='password'
                    id='password'
                    error={errors.password && true}
                    helperText={errors.password}
                >
                    Password
                </InputField>
                <InputField
                    name='confirmPassword'
                    value={values.confirmPassword}
                    onChange={setValues}
                    labelWidth={140}
                    type='password'
                    id='confirm-password'
                    error={errors.confirmPassword && true}
                    helperText={errors.confirmPassword}
                >
                    Confirm Password
                </InputField>

                <InputField
                    name='balance'
                    value={values.balance}
                    onChange={setValues}
                    labelWidth={105}
                    type='number'
                    id='amount'
                    adorment={'$'}
                    helperText={'*Not neccessary'}
                >
                    Initial Balance
                </InputField>
                <Button className='button-white'>REGISTER</Button>
            </form>
        </div>
    );
};

const mapDispatchToProps = {
    register,
    login,
};

export default connect(null, mapDispatchToProps)(UserForm);
