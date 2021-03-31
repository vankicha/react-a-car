import { storage } from '../../../utils/firebase';
import { Button as ButtonUI } from '@material-ui/core';
import './UploadPhotoButton.scss';

const UploadPhotoButton = ({ setPhotoUrl, storageFolder, textContent }) => {
    const handleUpload = async (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        let fileName = file.name + Math.random();
        let storageRef = storage.ref(storageFolder + fileName);

        await storageRef.put(file);
        const photoStorageUrl = await storageRef.getDownloadURL();
        setPhotoUrl(photoStorageUrl);
    };

    return (
        <div className='upload-photo-wrapper'>
            <label htmlFor='upload-photo'>
                <input
                    style={{ display: 'none' }}
                    id='upload-photo'
                    name='upload-photo'
                    type='file'
                    onChange={handleUpload}
                />
                <ButtonUI
                    color='secondary'
                    variant='contained'
                    component='span'
                >
                    {textContent}
                </ButtonUI>
            </label>
        </div>
    );
};

export default UploadPhotoButton;
