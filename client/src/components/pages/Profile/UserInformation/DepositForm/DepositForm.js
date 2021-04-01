import Button from '../../../../shared/Button';
import { connect } from 'react-redux';
import { getUserId } from '../../../../../reducers/userReducer';
import { deposit } from '../../../../../actions/userActions';
import useForm from '../../../../../hooks/useForm';
import './DepositForm.scss';

const DepositForm = ({ deposit, userId, setExpandDepositForm }) => {
    const [values, setValues] = useForm({ amount: '', password: '' });

    const handleDeposit = async (e) => {
        e.preventDefault();
        await deposit(userId, values.password, values.amount);
        setExpandDepositForm(false);
    };

    return (
        <div className='deposit-form-wrapper'>
            <form onSubmit={handleDeposit}>
                <input
                    placeholder='Amount'
                    id='amount'
                    type='number'
                    name='amount'
                    value={values.amount}
                    onChange={setValues}
                />
                <input
                    placeholder='Confirm password'
                    id='password'
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={setValues}
                />
                <Button className='button-black'>CONFIRM</Button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    userId: getUserId(state),
});

const mapDispatchToProps = {
    deposit,
};

export default connect(mapStateToProps, mapDispatchToProps)(DepositForm);
