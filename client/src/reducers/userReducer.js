import {
    SET_CREDENTIALS,
    LOGOUT,
    PROVIDE_CAR,
    RENT_CAR,
} from '../actionTypes/userTypes';

const initialState = {
    _id: '',
    email: '',
    isLogged: false,
    name: '',
    token: '',
    photoUrl: '',
    offers: [],
    balance: 0,
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
        case RENT_CAR:
            return { ...state, balance: state.balance - action.payload };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default user;

export const getIsLogged = (state) => state.user.isLogged;
export const getUserId = (state) => state.user._id;
export const getUserBalance = (state) => state.user.balance;
export const getUsername = (state) => state.user.name;
export const getUserPhoto = (state) => state.user.photoUrl;
export const getUserEmail = (state) => state.user.email;
