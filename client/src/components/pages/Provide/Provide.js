import Main from '../../layouts/Main';
import OfferForm from './OfferForm';
import OfferPhoto from './OfferPhoto';
import { useState } from 'react';

import './Provide.scss';

const Provide = () => {
    const [photoUrl, setPhotoUrl] = useState('');

    return (
        <Main>
            <div className='provide-section-wrapper'>
                <OfferForm photoUrl={photoUrl} setPhotoUrl={setPhotoUrl} />
                {photoUrl && <OfferPhoto photoUrl={photoUrl} />}
            </div>
        </Main>
    );
};

export default Provide;
