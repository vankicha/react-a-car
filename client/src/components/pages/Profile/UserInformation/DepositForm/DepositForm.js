import Button from '../../../../shared/Button';
import './DepositForm.scss';

const DepositForm = () => {
    return (
        <div className='deposit-form-wrapper'>
            <form>
                <input placeholder='Amount' id='amount' type='number' />
                <input
                    placeholder='Confirm password'
                    id='password'
                    type='password'
                />
                <Button className='button-black'>CONFIRM</Button>
            </form>
        </div>
    );
};

export default DepositForm;
