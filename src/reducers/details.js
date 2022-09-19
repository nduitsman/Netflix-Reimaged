const initialState = {
    movieId: 532639,
    title: 'Pinocchio',
    isHidden: true,
    showDetails: false
    
}

const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_DETAILS':
            return { ...state, title: action.payload.title,isHidden: false };
        case 'HIDE_DETAILS':
            return { ...state, isHidden: true};
        case 'TRANSITION_SHOW':
            return {...state, showDetails: true};
        case 'TRANSITION_HIDE':
            return {...state, showDetails: false};
        default: 
            return state;
    }
}

export default detailsReducer;