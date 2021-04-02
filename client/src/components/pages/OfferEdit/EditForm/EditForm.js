import InputField from '../../../shared/InputField';
import UploadPhotoButton from '../../../shared/UploadPhotoButton';
import Button from '../../../shared/Button';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateOffer } from '../../../../actions/offerActions';
import useForm from '../../../../hooks/useForm';
import './EditForm.scss';

const EditForm = ({ offer }) => {
    const [photoUrl, setPhotoUrl] = useState('');
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
        await updateOffer(offer._id, { ...values, image: photoUrl });
        history.push(`/offers/${offer._id}/details`);
    };

    return (
        <>
            <div className='offer-photo'>
                <img src={photoUrl} />
            </div>
            <div className='offer-form'>
                <form onSubmit={handleConfirmEdit}>
                    <h3>Edit your offer</h3>
                    <InputField
                        name='brand'
                        value={values.brand}
                        labelWidth={45}
                        type='text'
                        id='brand'
                        onChange={setValues}
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
                        helperText={'*per hour'}
                        onChange={setValues}
                    >
                        Price
                    </InputField>
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
