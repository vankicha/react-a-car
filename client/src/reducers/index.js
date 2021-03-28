import { combineReducers } from 'redux';
import user from './userReducer';
import offers from './offerReducer';

const rootReducer = combineReducers({
    user,
    offers,
});

export default rootReducer;
