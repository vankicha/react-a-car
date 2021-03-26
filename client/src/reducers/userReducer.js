import { SET_CREDENTIALS } from '../actionTypes/userTypes';

const initialState = {
    _id: '',
    email: '',
    isLogged: false,
    name: '',
    token: '',
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case SET_CREDENTIALS:
            return {
                ...state,
                ...action.payload,
                isLogged: true,
            };
        default:
            return state;
    }
};

export default user;

export const getIsLogged = (state) => state.user.isLogged;
