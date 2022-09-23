import React from 'react';
import { useState, useEffect } from 'react'
import './MoviePopUp.css';
import { useDispatch, useSelector } from 'react-redux';
import { showDetails, hideDetails, transitionDetails, transitionOffDetails, notInWatchlist, inWatchlist } from '../../actions';
import { useNavigate } from 'react-router-dom';

function MoviePopUp(props) {
    let [movie, setMovie] = useState([]);
    const activeUser = useSelector(state => state.userReducer);
    const watchListButton = useSelector(state => state.watchListButtonReducer);
    const popUp = useSelector(state => state.popUpReducer);
    const details = useSelector(state => state.detailsReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    let backdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    let movieTitle = '';

    useEffect(()=> {
        fetchMovie();
    },[popUp])

    if(movie.title) {
        movieTitle = movie.title;
    } else {
        movieTitle = movie.name;
    }

    function fetchMovie() {
        fetch(`https://api.themoviedb.org/3/movie/${ popUp.movieId }?api_key=${ props.apikey }&language=en-US`)
        .then((res)=> res.json())
        .then((json) => {
            setMovie(json);
        })
        .catch(console.error)
    }

    function checkWatchlist() {
        console.log('Check Watchlist Called')
        const configs = {
            method: "POST",
            body: JSON.stringify({ userId: activeUser.userId, movieId: popUp.movieId }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        fetch(`https://netflix-reimagined.herokuapp.com/auth/checkWatchlist`, configs)
        .then((res)=> res.json())
        .then((isInWatchlist) => {
            if (isInWatchlist) {
                console.log('In watchlist')
                dispatch(inWatchlist());
            } else {
                console.log('Not in watchlist')
                dispatch(notInWatchlist());
            }
            
        })
        .catch(console.error)
    }

    function handleAddToWatchlist() {
        if (!activeUser.userId) {
            navigate('/login');
        }
        const configs = {
            method: "PUT",
            body: JSON.stringify({ id: activeUser.userId, movie: { movieId: popUp.movieId, movieTitle: movieTitle, posterURL: poster } }),
            headers: {
              "Content-Type": "application/json",
            },
        }
       
        if (!watchListButton.movieWasFound) {
            fetch(`https://netflix-reimagined.herokuapp.com/auth/addToWatchlist`, configs)
            .then(()=> {
                checkWatchlist();
            })
            .catch(console.error)
        } else {
            fetch(`https://netflix-reimagined.herokuapp.com/auth/removeFromWatchlist`, configs)
            .then((res)=> {
                console.log(res.json());
                checkWatchlist();
                console.log('After remove');
            })
            .catch(console.error)
        }
    }
 
    function handleDetailsClick() {
        if(!details.showDetails){
            dispatch(showDetails(popUp.movieId, movieTitle ));
            dispatch(transitionDetails());
        } else {
            dispatch(hideDetails());
            dispatch(transitionOffDetails());
        }
    }

    function handleClassName() {
        if (details.showDetails) {
            return 'pop-up-show-details';
        } else if (popUp.isHidden) {
            return 'pop-up pop-up-hide';
        } else {
            return 'pop-up';
        }
    }

    return (
        <div className={ handleClassName() }> 
            <div className={ details.showDetails ? "pop-up-detail-wrapper-none" : "pop-up-detail-wrapper" }>
            <img src={ poster } alt={ movieTitle }/>
                <div className="pop-up-detail">
                    <h1>{ movie.title }</h1>
                    <p>{ movie.overview }</p>
                    <div className="pop-up-buttons">
                        <button className='pop-up-watchlist' onClick={ () => { handleAddToWatchlist() } }>{ watchListButton.movieWasFound && activeUser.userId ? 'Remove From Watchlist' : 'Add To Watchlist' }</button>
                        <button className='pop-up-details' onClick={() => { handleDetailsClick() }}>More Details</button>
                    </div>
                </div>
            </div>
            <div className={ details.showDetails ? "background-gradient-none" : "background-gradient" }></div>

            <div className={ details.showDetails ? "pop-up-video-show" : "pop-up-video"}>
                { popUp.trailerId ? <iframe 
                    src={ `https://www.youtube.com/embed/${ popUp.trailerId }?&playlist=${ popUp.trailerId }&autoplay=1&loop=1&start=30&end=60&modestbranding=1&controls=0&mute=1` } 
                    frameBorder="0"
                    allowFullScreen>  
                </iframe> : <img width='100%' src={ backdrop } alt={ movie.title } />}
                
            </div>
        </div>
  )
}

export default MoviePopUp;