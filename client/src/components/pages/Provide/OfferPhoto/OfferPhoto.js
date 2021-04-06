import './OfferPhoto.scss';

const OfferPhoto = ({ photoUrl }) => {
    return (
        <div className='offer-photo-wrapper'>
            <img src={photoUrl} alt='car'/>
        </div>
    );
};

export default OfferPhoto;
