import {combineReducers} from 'redux';
import templateSlice from './ducks/templateSlice/';
import uiSlice from './ducks/uiSlice'
import userSlice from './ducks/userSlice';


const rootReducer = combineReducers({

    template: templateSlice,
    ui: uiSlice,
    user: userSlice,
})

export default rootReducer;
