import { combineReducers } from 'redux';
import loggedReducer from "./isLogged";
import popUpReducer from './popUp';
import backdropReducer from './backdrop';


const allReducers = combineReducers({
    loggedReducer, //loggedReducer: loggedReducer
    popUpReducer, //popUpReducer: popUpReducer
    backdropReducer
})

export default allReducers;