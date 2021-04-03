import {
    FETCH_OFFERS,
    FETCH_OFFER,
    CLEAR_CURRENT_OFFER,
    FETCH_PENDING,
    FETCH_DONE,
} from '../actionTypes/offerTypes';
import { combineReducers } from 'redux';

const initialOfferState = {
    brand: '',
    model: '',
    year: '',
    pricePerHour: '',
    isAvailable: true,
    provider: { offers: [] },
    reviewers: [],
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

const isFetching = (state = false, action = {}) => {
    switch (action.type) {
        case FETCH_PENDING:
            return true;
        case FETCH_DONE:
            return false;
        default:
            return state;
    }
};

export default combineReducers({ offers, current, isFetching });

export const getAllOffers = (state) => state.offers.offers;
export const getCurrentOffer = (state) => state.offers.current;
export const getIsFetching = (state) => state.offers.isFetching;
