import { LOGIN, REGISTER } from '../actionTypes/userTypes';

const initialState = {
    _id: '',
    email: '',
    isLogged: false,
    firstName: '',
    lastName: '',
    token: '',
};

const user = (state = initialState, action) => {
    console.log(action.payload);

    switch (action.type) {
        case REGISTER:
        case LOGIN:
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
