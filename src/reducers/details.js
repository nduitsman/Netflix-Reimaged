const initialState = {
    movieId: 532639,
    title: 'Pinocchio',
    isHidden: true
    
}

const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_DETAILS':
            return { ...state, isHidden: false };
        case 'HIDE_DETAILS':
            return { ...state, isHidden: true};
        default: 
            return state;
    }
}

export default detailsReducer;