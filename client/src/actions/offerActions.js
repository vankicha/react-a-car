import {
    FETCH_OFFERS,
    FETCH_OFFER,
    CLEAR_CURRENT_OFFER,
} from '../actionTypes/offerTypes';
import offerService from '../services/offerService';

const fetchOffersSuccess = (offers) => ({
    type: FETCH_OFFERS,
    payload: offers,
});

const fetchOfferSuccess = (offer) => ({
    type: FETCH_OFFER,
    payload: offer,
    offerId: offer._id,
});

export const clearCurrentOffer = () => ({
    type: CLEAR_CURRENT_OFFER,
});

export const fetchOffers = () => async (dispatch) => {
    const response = await offerService.getAll();
    const data = await response.json();

    dispatch(fetchOffersSuccess(data));
};

export const fetchOffer = (offerId) => async (dispatch) => {
    const response = await offerService.getOne(offerId);
    const data = await response.json();

    dispatch(fetchOfferSuccess(data));
};
