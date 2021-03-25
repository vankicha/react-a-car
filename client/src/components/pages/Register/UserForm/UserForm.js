import InputField from '../../../shared/InputField';
import './UserForm.scss';

const UserForm = () => {
    return (
        <div className='user-form-wrapper'>
            <form>
                <h3>as User</h3>
                <InputField labelWidth={50} type='email' id='email'>
                    Email
                </InputField>
                <InputField labelWidth={80} type='text' id='firstName'>
                    First Name
                </InputField>

                <InputField labelWidth={80} type='text' id='lastName'>
                    Last Name
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

                <InputField labelWidth={60} type='number' id='amount'>
                    Amount
                </InputField>
            </form>
        </div>
    );
};

export default UserForm;
