import InputField from '../../../shared/InputField';
import Button from '../../../shared/Button';
import AlertBox from '../../../shared/AlertBox';
import './CompanyForm.scss';

const CompanyForm = () => {
    return (
        <div className='company-form-wrapper'>
            <form>
                <h3>Company</h3>
                <InputField labelWidth={50} type='email' id='email'>
                    Email
                </InputField>
                <InputField labelWidth={120} type='text' id='firstName'>
                    Company Name
                </InputField>
                <InputField labelWidth={70} type='password' id='password'>
                    Password
                </InputField>
                <InputField
                    labelWidth={140}
                    type='password'
                    id='confirm-password'
                >
                    Confirm Password
                </InputField>
                <AlertBox severity='info' title='Information'>
                    If you are owner of a company and you can't register be
                    sure to contact us immediately!
                </AlertBox>
                <Button className='button-white'>REGISTER</Button>
            </form>
        </div>
    );
};

export default CompanyForm;
