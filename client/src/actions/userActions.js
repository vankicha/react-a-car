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
    FETCH_USER_REVIEWS,
    REMOVE_OFFER_FROM_REVIEWS,
} from '../actionTypes/userTypes';
import { auth } from '../utils/firebase';
import authService from '../services/authService';
import offerService from '../services/offerService';
import userService from '../services/userService';

const setCredentialsSuccess = (userInfo) => ({
    type: SET_CREDENTIALS,
    payload: userInfo,
});

const provideCarSuccess = (offerId) => ({
    type: PROVIDE_CAR,
    payload: offerId,
});

const rentCarSuccess = (price) => ({
    type: RENT_CAR,
    payload: price,
});

const updateUserPhotoSuccess = (photoUrl) => ({
    type: UPDATE_USER_PHOTO,
    payload: photoUrl,
});

const userDepositSuccess = (amount) => ({
    type: UPDATE_USER_BALANCE,
    payload: amount,
});

const fetchUserOffersSucess = (offers) => ({
    type: FETCH_USER_OFFERS,
    payload: offers,
});

const deleteOfferSuccess = (offerId) => ({
    type: DELETE_USER_OFFER,
    target: offerId,
});

const fetchUserRentalsSuccess = (rentals) => ({
    type: FETCH_USER_RENTALS,
    payload: rentals,
});

const addOfferToReviewsSuccess = (offerId) => ({
    type: ADD_OFFER_TO_REVIEWS,
    payload: offerId,
});

const fetchUserReviewsSuccess = (reviews) => ({
    type: FETCH_USER_REVIEWS,
    payload: reviews,
});

const removeOfferFromReviewsSuccess = (offerId) => ({
    type: REMOVE_OFFER_FROM_REVIEWS,
    target: offerId,
});

export const register = ({
    email,
    firstName,
    lastName,
    password,
    balance,
}) => async (dispatch) => {
    try {
        const response = await authService.register(
            email,
            firstName,
            lastName,
            password,
            balance
        );

        const data = await response.json();

        if (data.message) {
            throw { message: data.message };
        }
    } catch (error) {
        throw { message: error.message };
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        throw error;
    }
};

export const verifyAuth = () => async (dispatch) => {
    auth.onIdTokenChanged(async (user) => {
        if (user) {
            const email = user.email;
            const { claims, token } = await user.getIdTokenResult();
            const resUserInfo = await userService.getUserInfo(claims.user_id);
            const userInfo = await resUserInfo.json();

            localStorage.setItem('__', 'temp');
            dispatch(
                setCredentialsSuccess({
                    email,
                    token,
                    _id: claims.user_id,
                    balance: userInfo.balance,
                    name: `${userInfo.firstName} ${userInfo.lastName}`,
                    photoUrl: userInfo.photoUrl,
                })
            );
        } else {
            localStorage.removeItem('__');
        }
    });
};

export const logout = () => async (dispatch) => {
    await auth.signOut();
    localStorage.removeItem('__');
    dispatch({ type: LOGOUT });
};

export const provideCar = ({ brand, model, year, price, photoUrl }) => async (
    dispatch
) => {
    const response = await offerService.create(
        brand,
        model,
        year,
        price,
        photoUrl
    );

    const data = await response.json();

    dispatch(provideCarSuccess(data.offerId));
};

export const rentCar = (userId, providerId, offerId, price, hours) => async (
    dispatch
) => {
    await userService.rentCar(userId, providerId, offerId, price, hours);

    dispatch(rentCarSuccess(price));
};

export const updateUserPhoto = (userId, photoUrl) => async (dispatch) => {
    await userService.updateUserPhoto(userId, photoUrl);

    dispatch(updateUserPhotoSuccess(photoUrl));
};

export const deposit = (userId, password, amount) => async (dispatch) => {
    await userService.deposit(userId, password, amount);

    dispatch(userDepositSuccess(amount));
};

export const fetchUserOffers = (userId) => async (dispatch) => {
    const response = await userService.getUserOffers(userId);
    const data = await response.json();

    dispatch(fetchUserOffersSucess(data.offers));
};

export const deleteOffer = (userId, offerId) => async (dispatch) => {
    await userService.deleteOffer(userId, offerId);

    dispatch(deleteOfferSuccess(offerId));
};

export const fetchUserRentals = (userId) => async (dispatch) => {
    const response = await userService.getUserRentals(userId);
    const data = await response.json();

    dispatch(fetchUserRentalsSuccess(data.rented));
};

export const fetchUserReviews = (userId) => async (dispatch) => {
    const response = await userService.getUserReviews(userId);
    const data = await response.json();

    dispatch(fetchUserReviewsSuccess(data));
};

export const addOfferToReviews = (userId, offerId) => async (dispatch) => {
    await userService.addOfferToReviews(userId, offerId);

    dispatch(addOfferToReviewsSuccess(offerId));
};

export const removeOfferFromReviews = (userId, offerId, providerId) => async (
    dispatch
) => {
    await userService.removeOfferFromReviews(userId, offerId);

    dispatch(removeOfferFromReviewsSuccess(offerId));
};
