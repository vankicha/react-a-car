import { SET_CREDENTIALS } from '../actionTypes/userTypes';
import { auth } from '../utils/firebase';
import authService from '../services/authService';

const setCredentialsSuccess = (userInfo) => ({
    type: SET_CREDENTIALS,
    payload: userInfo,
});

export const registerAsUser = ({
    email,
    firstName,
    lastName,
    password,
    balance,
}) => async (dispatch) => {
    try {
        await authService.registerAsUser(
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

export const registerAsCompany = ({ email, companyName, password }) => async (
    dispatch
) => {
    try {
        await authService.registerAsCompany(email, companyName, password);
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
            console.log(tokenResult);

            dispatch(setCredentialsSuccess({ email, token }));
        }
    });
};

export const logout = () => async (dispatch) => {
    await auth.signOut();
    dispatch({ type: 'LOGOUT' });
};
