const initialState = {
    backdrop_path: '',
    movieTitle: ''
    
}

const backdropReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PREVIEW':
            return { ...state, backdrop_path: action.payload.backdrop_path, movieTitle: action.payload.movieTitle };
        default: 
            return state;
    }
}

export default backdropReducer;