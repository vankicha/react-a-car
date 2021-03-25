import InputField from '../../../shared/InputField';
import Button from '../../../shared/Button';

import './UserForm.scss';

const UserForm = () => {
    return (
        <div className='user-form-wrapper'>
            <form>
                <h3>User</h3>
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

                <InputField
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
