import React from 'react';
import { useState, useEffect } from 'react'
import './MoviePopUp.css';

function MoviePopUp(props) {
    let [movie, setMovie] = useState([]);

    function fetchMovie() {
        fetch(`https://api.themoviedb.org/3/movie/${ props.id }?api_key=${ props.apikey }&language=en-US`)
        .then((res)=> res.json())
        .then((json) => {
            setMovie(json);
            
        })
        .catch(console.error)
    }

    useEffect(()=> {
        fetchMovie();
        
    },[])
    console.log(movie);

    let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    let movieTitle = '';

    if(movie.title) {
        movieTitle = movie.title;
    } else {
        movieTitle = movie.name;
    }

    return (
        // <div className='pop-up pop-up-hide' >
        <div className='pop-up' >
            <div className="pop-up-detail-wrapper">
            <img src={ poster } alt="Thor: Love and Thunder"/>
                <div className="pop-up-detail">
                    <h1>{ movie.title }</h1>
                    
                    <p>{ movie.overview } testing things here for additional length testing things here for additional length testing things here for additional length testing things here for additional length testing things here for additional length testing things here for additional length </p>
                    <div className="pop-up-buttons">
                        <button className='pop-up-watchlist'>Add To Watch List</button><button className='pop-up-details'>More Details</button>
                    </div>
                </div>
                
            </div>
            <div className="pop-up-video">

            </div>
        </div>
  )
}

export default MoviePopUp;