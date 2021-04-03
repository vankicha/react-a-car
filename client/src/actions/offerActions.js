import {
    FETCH_OFFERS,
    FETCH_OFFER,
    CLEAR_CURRENT_OFFER,
    FETCH_PENDING,
    FETCH_DONE,
} from '../actionTypes/offerTypes';
import offerService from '../services/offerService';

const fetchPending = () => ({
    type: FETCH_PENDING,
});

const fetchDone = () => ({
    type: FETCH_DONE,
});

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

export const fetchOffers = (page) => async (dispatch) => {
    dispatch(fetchPending());
    const response = await offerService.getAll(page);
    const data = await response.json();

    dispatch(fetchOffersSuccess(data.offers));
    dispatch(fetchDone());

    return data.totalCount;
};

export const fetchOffer = (offerId) => async (dispatch) => {
    dispatch(fetchPending());

    const response = await offerService.getOne(offerId);
    const data = await response.json();

    dispatch(fetchOfferSuccess(data));
    dispatch(fetchDone());
};

export const updateOffer = async (offerId, offerInfo) => {
    await offerService.updateOffer(offerId, offerInfo);
};
