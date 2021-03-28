import { SET_CREDENTIALS, PROVIDE_CAR } from '../actionTypes/userTypes';
import { auth } from '../utils/firebase';
import authService from '../services/authService';
import offerService from '../services/offerService';

const setCredentialsSuccess = (userInfo) => ({
    type: SET_CREDENTIALS,
    payload: userInfo,
});

const provideCarSuccess = (offerId) => ({
    type: PROVIDE_CAR,
    payload: offerId,
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
            const token = await user.getIdToken();
            const tokenResult = await user.getIdTokenResult();

            dispatch(setCredentialsSuccess({ email, token }));
        }
    });
};

export const logout = () => async (dispatch) => {
    await auth.signOut();
    dispatch({ type: 'LOGOUT' });
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
