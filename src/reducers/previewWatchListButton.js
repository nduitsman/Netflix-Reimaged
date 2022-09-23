const initialState = {
    movieWasFound: false
}

const previewWatchListButtonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PREVIEW_NOT_IN_WATCHLIST':
            return {...state, movieWasFound: false}
        case 'PREVIEW_IN_WATCHLIST':
            return {...state, movieWasFound: true}
        default: 
            return state;
    }
}

export default previewWatchListButtonReducer;