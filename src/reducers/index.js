import { combineReducers } from 'redux';
import loggedReducer from "./isLogged";
import popUpReducer from './popUp';
import backdropReducer from './backdrop';
import detailsReducer from './details';

const allReducers = combineReducers({
    loggedReducer, //loggedReducer: loggedReducer
    popUpReducer, //popUpReducer: popUpReducer
    backdropReducer, 
    detailsReducer
})

export default allReducers;