import InputField from '../../../shared/InputField';
import Button from '../../../shared/Button';
import useForm from '../../../../hooks/useForm';
import './UserForm.scss';

const UserForm = () => {
    const [values, setValues] = useForm({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        balance: 0,
    });

    const handleRegisterUser = (e) => {
        e.preventDefault();
        console.log(values);
    };

    return (
        <div className='user-form-wrapper'>
            <form onSubmit={handleRegisterUser}>
                <h3>User</h3>
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

export default UserForm;
