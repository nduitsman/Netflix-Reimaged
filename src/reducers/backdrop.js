const initialState = {
    backdrop_path: 'https://image.tmdb.org/t/p/original/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg',
    movieTitle: 'Pinocchio',
    movieId: 532639,
    posterURL: 'https://image.tmdb.org/t/p/w500/h32gl4a3QxQWNiNaR4Fc1uvLBkV.jpg'
    
}

const backdropReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PREVIEW':
            return { ...state, backdrop_path: action.payload.backdrop_path, movieTitle: action.payload.movieTitle, movieId: action.payload.movieId, posterURL: action.payload.posterURL};
        default: 
            return state;
    }
}

export default backdropReducer;