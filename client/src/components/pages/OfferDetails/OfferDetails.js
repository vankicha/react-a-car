import Main from '../../layouts/Main';
import ProviderProfile from './ProviderProfile';
import OfferInformation from './OfferInformation';
import './OfferDetails.scss';

const OfferDetails = ({ match }) => {
    const offerId = match.params.offerId;

    return (
        <Main>
            <div className='offer-details-wrapper'>
                <OfferInformation />
                <ProviderProfile />
            </div>
        </Main>
    );
};

export default OfferDetails;
