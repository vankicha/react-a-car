import {
    SET_CREDENTIALS,
    LOGOUT,
    PROVIDE_CAR,
    RENT_CAR,
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

export const register = ({
    email,
    firstName,
    lastName,
    password,
    balance,
}) => async (dispatch) => {
    try {
        await authService.register(
            email,
            firstName,
            lastName,
            password,
            balance
        );
    } catch (error) {
        console.log(error);
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        console.log(error);
    }
};

export const verifyAuth = () => async (dispatch) => {
    auth.onIdTokenChanged(async (user) => {
        if (user) {
            const email = user.email;
            const { claims, token } = await user.getIdTokenResult();
            const resUserInfo = await userService.getUserInfo(claims.user_id);
            const userInfo = await resUserInfo.json();

            dispatch(
                setCredentialsSuccess({
                    email,
                    token,
                    _id: claims.user_id,
                    balance: userInfo.balance,
                    name: `${userInfo.firstName} ${userInfo.lastName}`,
                })
            );
        }
    });
};

export const logout = () => async (dispatch) => {
    await auth.signOut();
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
