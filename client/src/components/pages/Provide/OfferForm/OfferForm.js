import InputField from '../../../shared/InputField';
import UploadPhotoButton from '../../../shared/UploadPhotoButton';
import Button from '../../../shared/Button';
import AlertBox from '../../../shared/AlertBox';
import Loader from '../../../shared/Loader';
import useForm from '../../../../hooks/useForm';
import { validateOfferForm } from '../../../../helpers/validators';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
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
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [photoError, setPhotoError] = useState('');

    const history = useHistory();
    const handleProvide = async (e) => {
        e.preventDefault();
        try {
            setErrors({});
            setPhotoError('');
            validateOfferForm({ ...values, photoUrl });
            setIsLoading(true);
            await provideCar({ ...values, photoUrl });
            setIsLoading(false);
            history.push('/offers');
        } catch (error) {
            setIsLoading(false);
            if (error.hasOwnProperty('photoUrl')) {
                setPhotoError(error.photoUrl);
            }
            setErrors(error);
        }
    };

    return (
        <div className='provide-form'>
            <form onSubmit={handleProvide}>
                <h3>Provide your car</h3>
                {isLoading && <Loader />}
                <InputField
                    name='brand'
                    value={values.brand}
                    onChange={setValues}
                    labelWidth={45}
                    type='text'
                    id='brand'
                    error={errors.brand && true}
                    helperText={errors.brand}
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
                    error={errors.model && true}
                    helperText={errors.model}
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
                    error={errors.year && true}
                    helperText={errors.year}
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
                    error={errors.price && true}
                    helperText={errors.price || '*per hour'}
                >
                    Price
                </InputField>
                {photoError && (
                    <AlertBox severity='error'>{photoError}</AlertBox>
                )}
                <UploadPhotoButton
                    setPhotoUrl={setPhotoUrl}
                    storageFolder='offers/'
                    textContent='Add image'
                />
                <Button className='button-white'>PROVIDE</Button>
            </form>
        </div>
    );
};

const mapDispatchToProps = {
    provideCar,
};

export default connect(null, mapDispatchToProps)(OfferForm);
