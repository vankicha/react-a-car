import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InputField from '../../../shared/InputField';
import Button from '../../../shared/Button';
import useForm from '../../../../hooks/useForm';
import { login } from '../../../../actions/userActions';
import './LoginForm.scss';

const LoginForm = ({ login }) => {
    const [values, setValues] = useForm({ email: '', password: '' });
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(values.email, values.password);
        history.push('/offers');
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

const mapDispatchToProps = {
    login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
