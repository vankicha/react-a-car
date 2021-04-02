import Main from '../../layouts/Main';
import EditForm from './EditForm';
import { connect } from 'react-redux';
import { getCurrentOffer } from '../../../reducers/offerReducer';
import { useEffect } from 'react';
import useClear from '../../../hooks/useClear';
import { fetchOffer, clearCurrentOffer } from '../../../actions/offerActions';
import './OfferEdit.scss';

const OfferEdit = ({ match, offer, fetchOffer, clearCurrentOffer }) => {
    const offerId = match.params.offerId;

    useClear(clearCurrentOffer);

    useEffect(() => {
        fetchOffer(offerId);
    }, [fetchOffer, offerId]);

    return (
        <Main>
            <div className='offer-edit-wrapper'>
                <EditForm offer={offer} />
            </div>
        </Main>
    );
};

const mapStateToProps = (state) => ({
    offer: getCurrentOffer(state),
});

const mapDispatchToProps = { fetchOffer, clearCurrentOffer };

export default connect(mapStateToProps, mapDispatchToProps)(OfferEdit);
