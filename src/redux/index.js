import { combineReducers } from 'redux';
import { user } from './user_info';
import { rootReducer } from './root';


export const root = combineReducers({
    user,
    rootReducer,
})