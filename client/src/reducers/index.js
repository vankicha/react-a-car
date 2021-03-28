import { combineReducers } from 'redux';
import user from './userReducer';
import offers from './offerReducer';

const appReducer = combineReducers({
    user,
    offers,
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;
