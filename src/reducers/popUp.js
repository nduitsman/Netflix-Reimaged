const initialState = {
    movieId: 532639,
    trailerId: 'imv03rS6Vb0',
    title: 'Pinocchio',
    isHidden: true
}

const popUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW':
            return { ...state, movieId: action.payload.id, title: action.payload.title, isHidden: false, trailerId: action.payload.trailerId };
        case 'HIDE':
            return { ...state, isHidden: true };
        case 'UPDATE_ID':
            // console.log(action.payload)
            return {...state, trailerId: action.payload}
        default: 
            return state;
    }
}

export default popUpReducer;