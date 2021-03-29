import Main from '../../layouts/Main';
import ProviderProfile from './ProviderProfile';
import './OfferDetails.scss';

const OfferDetails = ({ match }) => {
    const offerId = match.params.offerId;

    return (
        <Main>
            <div className='offer-details-wrapper'>
                <ProviderProfile />
            </div>
        </Main>
    );
};

export default OfferDetails;
