import {
    FETCH_OFFERS,
    FETCH_OFFER,
    CLEAR_CURRENT_OFFER,
} from '../actionTypes/offerTypes';
import { combineReducers } from 'redux';

const initialOfferState = {
    brand: '',
    model: '',
    year: '',
    pricePerHour: '',
    isAvailable: true,
    provider: { offers: [] },
};

const current = (state = initialOfferState, action = {}) => {
    switch (action.type) {
        case FETCH_OFFER:
            return {
                ...state,
                ...action.payload,
                isAvailable: action.payload.lastRented
                    ? new Date() > new Date(action.payload.lastRented)
                    : true,
            };
        case CLEAR_CURRENT_OFFER:
            return initialOfferState;
        default:
            return state;
    }
};

const offers = (state = [], action) => {
    switch (action.type) {
        case FETCH_OFFERS:
            return action.payload.map((x) => ({
                ...initialOfferState,
                ...x,
                isAvailable: x.lastRented
                    ? new Date() > new Date(x.lastRented)
                    : true,
            }));
        default:
            return state;
    }
};

export default combineReducers({ offers, current });

export const getAllOffers = (state) => state.offers.offers;
export const getCurrentOffer = (state) => state.offers.current;
