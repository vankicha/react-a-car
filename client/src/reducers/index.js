import { combineReducers } from 'redux';
import user from './userReducer';

const appReducer = combineReducers({
    user,
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;
