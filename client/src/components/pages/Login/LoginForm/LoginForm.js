import InputField from '../../../shared/InputField';
import Button from '../../../shared/Button';
import './LoginForm.scss';

const LoginForm = () => {
    return (
        <div className='login-form'>
            <form>
                <InputField labelWidth={50} type='email' id='email'>
                    Email
                </InputField>
                <InputField labelWidth={70} type='password' id='password'>
                    Password
                </InputField>
                <Button className='button-white'>LOGIN</Button>
            </form>
        </div>
    );
};

export default LoginForm;
