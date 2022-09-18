const initialState = {
    movieId: 0,
    title: '',
    isHidden: true
}

const popUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW':
            return { ...state, movieId: action.payload.id, title: action.payload.title, isHidden: false };
        case 'HIDE':
            return { ...state, isHidden: true };
        default: 
            return state;
    }
}

export default popUpReducer;