const initialState = {
    username: '',
    userId: '',
    watchlistId: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CURRENTUSER':
            // console.log(action.payload);
            return { ...state , username: action.payload.username, userId: action.payload.userId }; //TODO: ADD WATCHLIST ID
        default: 
            return state;
    }
}

export default userReducer;