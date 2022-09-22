import { combineReducers } from 'redux';
import loggedReducer from "./isLogged";
import popUpReducer from './popUp';
import backdropReducer from './backdrop';
import detailsReducer from './details';
import userReducer from './user';
import watchListButtonReducer from './watchListButton';
import previewWatchListButtonReducer from './previewWatchListButton';

const allReducers = combineReducers({
    loggedReducer, //loggedReducer: loggedReducer
    popUpReducer, //popUpReducer: popUpReducer
    backdropReducer, 
    detailsReducer,
    userReducer,
    watchListButtonReducer,
    previewWatchListButtonReducer
})

export default allReducers;