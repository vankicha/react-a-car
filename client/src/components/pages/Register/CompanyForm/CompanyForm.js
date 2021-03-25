import InputField from '../../../shared/InputField';
import Button from '../../../shared/Button';
import AlertBox from '../../../shared/AlertBox';
import useForm from '../../../../hooks/useForm';
import './CompanyForm.scss';

const CompanyForm = () => {
    const [values, setValues] = useForm({
        email: '',
        companyName: '',
        password: '',
        confirmPassword: '',
    });

    const handleRegisterCompany = (e) => {
        e.preventDefault();
        console.log(values);
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

export default CompanyForm;
