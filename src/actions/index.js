export const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const showPopUp = (movieId, movieTitle) => {
    let movie = { id: movieId, title: movieTitle }
    return {
        type: 'SHOW',
        payload: movie
    }
}

export const hidePopUp = (movieId) => {
    return {
        type: 'HIDE'
    }
}