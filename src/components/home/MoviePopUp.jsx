import React from 'react';
import { useState, useEffect } from 'react'
import './MoviePopUp.css';
import { useDispatch, useSelector } from 'react-redux';
import { showDetails, hideDetails } from '../../actions'

function MoviePopUp(props) {
    let [movie, setMovie] = useState([]);

    const popUp = useSelector(state => state.popUpReducer);
    const details = useSelector(state => state.detailsReducer);
    const dispatch = useDispatch();

    function fetchMovie() {
        fetch(`https://api.themoviedb.org/3/movie/${ popUp.movieId }?api_key=${ props.apikey }&language=en-US`)
        .then((res)=> res.json())
        .then((json) => {
            setMovie(json);
        })
        .catch(console.error)
    }

    useEffect(()=> {
        fetchMovie();

        
    },[popUp])
 

    function handleClick() {
        if(details.isHidden){
            dispatch(showDetails(popUp.movieId, movieTitle));
        } else {
            dispatch(hideDetails(popUp.movieId, movieTitle));
        }

    }

    let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    let movieTitle = '';

    if(movie.title) {
        movieTitle = movie.title;
    } else {
        movieTitle = movie.name;
    }

    return (
        <div className={ popUp.isHidden ? 'pop-up pop-up-hide' : 'pop-up'}>
            <div className="pop-up-detail-wrapper">
            <img src={ poster } alt={ movieTitle }/>
                <div className="pop-up-detail">
                    <h1>{ movie.title }</h1>
                    <p>{ movie.overview }</p>
                    <div className="pop-up-buttons">
                        <button className='pop-up-watchlist'>Add To Watch List</button>
                        <button className='pop-up-details' onClick={() => { handleClick() }}>More Details</button>
                    </div>
                </div>
                
            </div>
            <div className="pop-up-video">

            </div>
        </div>
  )
}

export default MoviePopUp;