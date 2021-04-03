import Main from '../../layouts/Main';
import ProviderProfile from './ProviderProfile';
import OfferInformation from './OfferInformation';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import useClear from '../../../hooks/useClear';
import { fetchOffer, clearCurrentOffer } from '../../../actions/offerActions';
import { getCurrentOffer, getIsFetching } from '../../../reducers/offerReducer';
import Loader from '../../shared/Loader';
import './OfferDetails.scss';

const OfferDetails = ({
    match,
    fetchOffer,
    clearCurrentOffer,
    offer,
    isFetching,
}) => {
    const offerId = match.params.offerId;

    useClear(clearCurrentOffer);

    useEffect(() => {
        fetchOffer(offerId);
    }, [fetchOffer, offerId]);

    return (
        <Main>
            {isFetching ? (
                <Loader type='linear' />
            ) : (
                <div className='offer-details-wrapper'>
                    <OfferInformation offer={offer} />
                    <ProviderProfile provider={offer.provider} />
                </div>
            )}
        </Main>
    );
};

const mapStateToProps = (state) => ({
    offer: getCurrentOffer(state),
    isFetching: getIsFetching(state),
});

const mapDispatchToProps = { fetchOffer, clearCurrentOffer };

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
