import { FETCH_OFFERS } from '../actionTypes/offerTypes';

const initalOfferState = {
    brand: '',
    model: '',
    year: '',
    price: '',
    isAvailable: true,
};

const offers = (state = [], action) => {
    switch (action.type) {
        case FETCH_OFFERS:
            return action.payload;
        default:
            return state;
    }
};

export default offers;

export const getAllOffers = (state) => state.offers;
