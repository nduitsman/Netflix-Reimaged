export const setCurrentUser = (username, userId, watchlistId) => {
    let currentUser = { username, userId, watchlistId }
    return {
        type: 'SET_CURRENTUSER',
        payload: currentUser
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}
export const signIn = () => {
    return {
        type: 'SIGN_IN'
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

export const hidePopUp = () => {
    return {
        type: 'HIDE'
    }
}

export const updateId = (trailerId) => {
    return {
        type: 'UPDATE_ID',
        payload: trailerId
    }
}

export const transitionDetails = () => {
    return {
        type: 'TRANSITION_SHOW'
    }
}

export const transitionOffDetails = () => {
    return {
        type: 'TRANSITION_HIDE'
    }
}

export const setPreview = (backdrop_path, movieTitle, movieId, posterURL) => {
    let movie = { backdrop_path, movieTitle, movieId, posterURL } //backdrop_path: backdrop_path
    return {
        type: 'SET_PREVIEW',
        payload: movie
    }
}

export const showDetails = (movieId, movieTitle) => {
    let movie = { id: movieId, title: movieTitle }
    return {
        type: 'SHOW_DETAILS',
        payload: movie
    }
}

export const hideDetails = (movieId, movieTitle) => {
    let movie = { id: movieId, title: movieTitle }
    return {
        type: 'HIDE_DETAILS',
        payload: movie
    }
}


export const notInWatchlist = () => {
    return {
        type: 'NOT_IN_WATCHLIST'
    }
}

export const inWatchlist = () => {
    return {
        type: 'IN_WATCHLIST'
    }
}

export const previewNotInWatchlist = () => {
    return {
        type: 'PREVIEW_NOT_IN_WATCHLIST'
    }
}

export const previewInWatchlist = () => {
    return {
        type: 'PREVIEW_IN_WATCHLIST'
    }
}