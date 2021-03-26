import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerAsCompany, login } from '../../../../actions/userActions';
import InputField from '../../../shared/InputField';
import Button from '../../../shared/Button';
import AlertBox from '../../../shared/AlertBox';
import useForm from '../../../../hooks/useForm';
import './CompanyForm.scss';

const CompanyForm = ({ registerAsCompany, login }) => {
    const [values, setValues] = useForm({
        email: '',
        companyName: '',
        password: '',
        confirmPassword: '',
    });
    const history = useHistory();

    const handleRegisterCompany = async (e) => {
        e.preventDefault();
        await registerAsCompany({ ...values });
        await login(values.email, values.password);
        history.push('/');
    };

    return (
        <div className='company-form-wrapper'>
            <form onSubmit={handleRegisterCompany}>
                <h3>Company</h3>
                <InputField
                    onChange={setValues}
                    value={values.email}
                    name='email'
                    labelWidth={50}
                    type='email'
                    id='email'
                >
                    Email
                </InputField>
                <InputField
                    onChange={setValues}
                    value={values.companyName}
                    name='companyName'
                    labelWidth={120}
                    type='text'
                    id='company-name'
                >
                    Company Name
                </InputField>
                <InputField
                    onChange={setValues}
                    value={values.password}
                    name='password'
                    labelWidth={70}
                    type='password'
                    id='password'
                >
                    Password
                </InputField>
                <InputField
                    onChange={setValues}
                    value={values.confirmPassword}
                    name='confirmPassword'
                    labelWidth={140}
                    type='password'
                    id='confirm-password'
                >
                    Confirm Password
                </InputField>
                <AlertBox severity='info' title='Information'>
                    If you are owner of a company and you can't register be sure
                    to contact us immediately!
                </AlertBox>
                <Button className='button-white'>REGISTER</Button>
            </form>
        </div>
    );
};

const mapDispatchToProps = { registerAsCompany, login };

export default connect(null, mapDispatchToProps)(CompanyForm);
