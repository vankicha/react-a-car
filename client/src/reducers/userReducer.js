import { SET_CREDENTIALS, PROVIDE_CAR } from '../actionTypes/userTypes';

const initialState = {
    _id: '',
    email: '',
    isLogged: false,
    name: '',
    token: '',
    offers: [],
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case SET_CREDENTIALS:
            return {
                ...state,
                ...action.payload,
                isLogged: true,
            };
        case PROVIDE_CAR:
            return { ...state, offers: [...state.offers, action.payload] };
        default:
            return state;
    }
};

export default user;

export const getIsLogged = (state) => state.user.isLogged;
