import { LOGIN, REGISTER } from '../actionTypes/userTypes';
import authService from '../services/authService';

const registerSuccess = (userInfo) => ({
    type: REGISTER,
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
        const response = await authService.registerAsUser(
            email,
            firstName,
            lastName,
            password,
            balance
        );
        const data = await response.json();
        console.log(data);
        dispatch(registerSuccess(data));
    } catch (error) {
        console.log(error);
    }
};

export const registerAsCompany = ({ email, companyName, password }) => async (
    dispatch
) => {
    try {
        const response = await authService.registerAsCompany(
            email,
            companyName,
            password
        );
        const data = await response.json();

        dispatch(registerSuccess(data));
    } catch (error) {
        console.log(error);
    }
};
