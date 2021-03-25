import InputField from '../../../shared/InputField';
import Button from '../../../shared/Button';
import useForm from '../../../../hooks/useForm';
import './LoginForm.scss';

const LoginForm = () => {
    const [values, setValues] = useForm({ email: '', password: '' });

    const handleLogin = (e) => {
        e.preventDefault();

        console.log(values);
    };

    return (
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
    );
};

export default LoginForm;
