import './OfferPhoto.scss';

const OfferPhoto = ({ photoUrl }) => {
    return (
        <div className='offer-photo-wrapper'>
            <img src={photoUrl} />
        </div>
    );
};

export default OfferPhoto;
