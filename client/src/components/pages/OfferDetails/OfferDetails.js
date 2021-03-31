import Main from '../../layouts/Main';
import ProviderProfile from './ProviderProfile';
import OfferInformation from './OfferInformation';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import useClear from '../../../hooks/useClear';
import { fetchOffer, clearCurrentOffer } from '../../../actions/offerActions';
import { getCurrentOffer } from '../../../reducers/offerReducer';
import './OfferDetails.scss';

const OfferDetails = ({ match, fetchOffer, clearCurrentOffer, offer }) => {
    const offerId = match.params.offerId;

    useClear(clearCurrentOffer);

    useEffect(() => {
        fetchOffer(offerId);
    }, [match, fetchOffer]);

    return (
        <Main>
            <div className='offer-details-wrapper'>
                <OfferInformation offer={offer} />
                <ProviderProfile provider={offer.provider} />
            </div>
        </Main>
    );
};

const mapStateToProps = (state) => ({
    offer: getCurrentOffer(state),
});

const mapDispatchToProps = { fetchOffer, clearCurrentOffer };

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
