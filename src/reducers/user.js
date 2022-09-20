const initialState = {
    username: '',
    watchlistId: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENTUSER':
            // console.log(action.payload);
            return { ...state , username: action.payload.username }; //TODO: ADD WATCHLIST ID
        default: 
            return state;
    }
}

export default userReducer;