import { combineReducers } from 'redux';
import { user_info, user_format } from './user_info';
import { rootReducer } from './root';


export const root = combineReducers({
    user_info,
    rootReducer,
})