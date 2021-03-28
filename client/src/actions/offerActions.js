import { FETCH_OFFERS } from '../actionTypes/offerTypes';
import offerService from '../services/offerService';

const fetchOffersSuccess = (offers) => ({
    type: FETCH_OFFERS,
    payload: offers,
});

export const fetchOffers = () => async (dispatch) => {
    const response = await offerService.getAll();
    const data = await response.json();

    dispatch(fetchOffersSuccess(data));
};
