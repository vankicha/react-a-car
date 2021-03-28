import Offer from './Offer';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getAllOffers } from '../../../../reducers/offerReducer';
import { fetchOffers } from '../../../../actions/offerActions';
import './SectionOffers.scss';

const SectionOffers = ({ offers, fetchOffers }) => {
    useEffect(() => {
        fetchOffers();
    }, [fetchOffers]);

    console.log(offers);

    return (
        <div className='section-offers-wrapper'>
            {offers.map((x) => (
                <Offer key={x._id} offer={x} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    offers: getAllOffers(state),
});

const mapDispatchToProps = {
    fetchOffers,
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionOffers);
