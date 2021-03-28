import InputField from '../../../shared/InputField';
import UploadPhotoButton from './UploadPhotoButton';
import Button from '../../../shared/Button';
import useForm from '../../../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import { provideCar } from '../../../../actions/userActions';
import { connect } from 'react-redux';
import './OfferForm.scss';

const OfferForm = ({ provideCar, photoUrl, setPhotoUrl }) => {
    const [values, setValues] = useForm({
        brand: '',
        model: '',
        year: '',
        price: 0,
    });
    const history = useHistory();
    const handleProvide = async (e) => {
        e.preventDefault();
        await provideCar({ ...values, photoUrl });
        history.push('/');
    };

    return (
        <div className='provide-form'>
            <form onSubmit={handleProvide}>
                <h3>Provide your car</h3>
                <InputField
                    name='brand'
                    value={values.brand}
                    onChange={setValues}
                    labelWidth={45}
                    type='text'
                    id='brand'
                >
                    Brand
                </InputField>
                <InputField
                    name='model'
                    value={values.model}
                    onChange={setValues}
                    labelWidth={45}
                    type='text'
                    id='model'
                >
                    Model
                </InputField>
                <InputField
                    name='year'
                    value={values.year}
                    onChange={setValues}
                    labelWidth={45}
                    type='text'
                    id='year'
                >
                    Year
                </InputField>
                <InputField
                    name='price'
                    value={values.price}
                    onChange={setValues}
                    labelWidth={45}
                    type='number'
                    id='price'
                    adorment={'$'}
                    helperText={'*per hour'}
                >
                    Price
                </InputField>
                <UploadPhotoButton setPhotoUrl={setPhotoUrl} />
                <Button className='button-white'>PROVIDE</Button>
            </form>
        </div>
    );
};

const mapDispatchToProps = {
    provideCar,
};

export default connect(null, mapDispatchToProps)(OfferForm);
