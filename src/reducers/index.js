import { combineReducers } from 'redux';
import loggedReducer from "./isLogged";
import popUpReducer from './popUp';


const allReducers = combineReducers({
    loggedReducer, //loggedReducer: loggedReducer
    popUpReducer //popUpReducer: popUpReducer
})

export default allReducers;