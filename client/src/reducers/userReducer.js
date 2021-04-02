import {
    SET_CREDENTIALS,
    LOGOUT,
    PROVIDE_CAR,
    RENT_CAR,
    UPDATE_USER_PHOTO,
    UPDATE_USER_BALANCE,
    FETCH_USER_OFFERS,
    DELETE_USER_OFFER,
    FETCH_USER_RENTALS,
    ADD_OFFER_TO_REVIEWS,
} from '../actionTypes/userTypes';

const initialState = {
    _id: '',
    email: '',
    isLogged: false,
    name: '',
    token: '',
    photoUrl: '',
    offers: [],
    rentals: [],
    reviews: [],
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
        case DELETE_USER_OFFER:
            return {
                ...state,
                offers: state.offers.filter((x) => x._id !== action.target),
            };
        case FETCH_USER_OFFERS:
            return { ...state, offers: action.payload };
        case FETCH_USER_RENTALS:
            return { ...state, rentals: action.payload };
        case PROVIDE_CAR:
            return { ...state, offers: [...state.offers, action.payload] };
        case RENT_CAR:
            return { ...state, balance: state.balance - action.payload };
        case UPDATE_USER_PHOTO:
            return { ...state, photoUrl: action.payload };
        case UPDATE_USER_BALANCE:
            return {
                ...state,
                balance: state.balance + Number(action.payload),
            };
        case ADD_OFFER_TO_REVIEWS:
            return {
                ...state,
                reviews: [...state.reviews, action.payload],
            };
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
export const getUserOffers = (state) => state.user.offers;
export const getUserRentals = (state) => state.user.rentals;
export const getUserReviews = (state) => state.user.reviews;
