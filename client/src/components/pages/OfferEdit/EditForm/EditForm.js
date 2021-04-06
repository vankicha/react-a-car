import InputField from '../../../shared/InputField';
import UploadPhotoButton from '../../../shared/UploadPhotoButton';
import Button from '../../../shared/Button';
import AlertBox from '../../../shared/AlertBox';
import Loader from '../../../shared/Loader';
import { validateOfferForm } from '../../../../helpers/validators';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateOffer } from '../../../../actions/offerActions';
import useForm from '../../../../hooks/useForm';
import './EditForm.scss';

const EditForm = ({ offer }) => {
    const [photoUrl, setPhotoUrl] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [photoError, setPhotoError] = useState('');
    const [values, setValues] = useForm({
        brand: '',
        model: '',
        year: '',
        price: 0,
    });

    useEffect(() => {
        setValues({ ...offer, price: offer.pricePerHour });
        setPhotoUrl(offer.image);
    }, [offer]);

    const history = useHistory();

    const handleConfirmEdit = async (e) => {
        e.preventDefault();
        try {
            setErrors({});
            setPhotoError('');
            validateOfferForm({ ...values, photoUrl });
            setIsLoading(true);
            await updateOffer(offer._id, { ...values, image: photoUrl });
            setIsLoading(false);
            history.push(`/offers/${offer._id}/details`);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            if (error.hasOwnProperty('photoUrl')) {
                setPhotoError(error.photoUrl);
            }
            setErrors(error);
        }
    };

    return (
        <>
            <div className='offer-photo'>
                <img src={photoUrl} alt='car' />
            </div>
            <div className='offer-form'>
                <form onSubmit={handleConfirmEdit}>
                    <h3>Edit your offer</h3>
                    {isLoading && <Loader />}
                    <InputField
                        name='brand'
                        value={values.brand}
                        labelWidth={45}
                        type='text'
                        id='brand'
                        onChange={setValues}
                        error={errors.brand && true}
                        helperText={errors.brand}
                    >
                        Brand
                    </InputField>
                    <InputField
                        name='model'
                        value={values.model}
                        labelWidth={45}
                        type='text'
                        id='model'
                        onChange={setValues}
                        error={errors.model && true}
                        helperText={errors.model}
                    >
                        Model
                    </InputField>
                    <InputField
                        name='year'
                        value={values.year}
                        labelWidth={45}
                        type='text'
                        id='year'
                        onChange={setValues}
                        error={errors.year && true}
                        helperText={errors.year}
                    >
                        Year
                    </InputField>
                    <InputField
                        name='price'
                        value={values.price}
                        labelWidth={45}
                        type='number'
                        id='price'
                        adorment={'$'}
                        onChange={setValues}
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
                        textContent='Change image'
                    />
                    <Button className='button-white'>CONFIRM EDIT</Button>
                </form>
            </div>
        </>
    );
};

export default EditForm;
