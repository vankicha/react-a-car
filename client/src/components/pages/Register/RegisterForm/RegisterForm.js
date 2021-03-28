import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputField from '../../../shared/InputField';
import Button from '../../../shared/Button';
import useForm from '../../../../hooks/useForm';
import { register, login } from '../../../../actions/userActions';
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
    const history = useHistory();

    const handleRegisterUser = async (e) => {
        e.preventDefault();
        await register({ ...values });
        await login(values.email, values.password);
        history.push('/');
    };

    return (
        <div className='user-form-wrapper'>
            <form onSubmit={handleRegisterUser}>
                <InputField
                    value={values.email}
                    name='email'
                    onChange={setValues}
                    labelWidth={50}
                    type='email'
                    id='email'
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
