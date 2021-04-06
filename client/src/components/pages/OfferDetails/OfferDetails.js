import Main from '../../layouts/Main';
import ProviderProfile from './ProviderProfile';
import OfferInformation from './OfferInformation';
import PopularPlaces from './PopularPlaces';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import useClear from '../../../hooks/useClear';
import { fetchOffer, clearCurrentOffer } from '../../../actions/offerActions';
import { getCurrentOffer, getIsFetching } from '../../../reducers/offerReducer';
import Loader from '../../shared/Loader';
import ForecastInfo from '../../shared/ForecastInfo';
import './OfferDetails.scss';

const OfferDetails = ({
    match,
    fetchOffer,
    clearCurrentOffer,
    offer,
    isFetching,
}) => {
    const offerId = match.params.offerId;
    const [show, setShow] = useState(false);

    useClear(clearCurrentOffer);

    useEffect(() => {
        setShow(false);
        fetchOffer(offerId);
    }, [fetchOffer, offerId]);

    return (
        <div className='offer-details-wrapper'>
            <Main>
                {isFetching ? (
                    <Loader type='linear' />
                ) : (
                    <>
                        <div className='offer-details-content'>
                            <OfferInformation offer={offer} setShow={setShow} />
                            <ProviderProfile provider={offer.provider} />
                        </div>
                        {show && (
                            <div className='offer-additional-info'>
                                <ForecastInfo />
                                <PopularPlaces />
                            </div>
                        )}
                    </>
                )}
            </Main>
        </div>
    );
};

const mapStateToProps = (state) => ({
    offer: getCurrentOffer(state),
    isFetching: getIsFetching(state),
});

const mapDispatchToProps = { fetchOffer, clearCurrentOffer };

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
