const initialState = {
    movieWasFound: false
}

const watchListButtonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NOT_IN_WATCHLIST':
            return {...state, movieWasFound: false}
        case 'IN_WATCHLIST':
            return {...state, movieWasFound: true}
        default: 
            return state;
    }
}

export default watchListButtonReducer;