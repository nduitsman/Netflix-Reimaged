import React from 'react';
import { useState, useEffect } from 'react'
import './MoviePopUp.css';
import { useDispatch, useSelector } from 'react-redux';
import { showDetails, hideDetails, transitionDetails, transitionOffDetails } from '../../actions'

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
 

    function handleDetailsClick() {
        if(!details.showDetails){
            // console.log(movieTitle)
            dispatch(showDetails(popUp.movieId, movieTitle));
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

    let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    let backdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    let movieTitle = '';

    if(movie.title) {
        movieTitle = movie.title;
    } else {
        movieTitle = movie.name;
    }

    return (
        <div className={ handleClassName() }> { /* Here */ }
            <div className={ details.showDetails ? "pop-up-detail-wrapper-none" : "pop-up-detail-wrapper" }>{ /* Here */ }
            <img src={ poster } alt={ movieTitle }/>
                <div className="pop-up-detail">
                    <h1>{ movie.title }</h1>
                    <p>{ movie.overview }</p>
                    <div className="pop-up-buttons">
                        <button className='pop-up-watchlist'>Add To Watch List</button>
                        <button className='pop-up-details' onClick={() => { handleDetailsClick() }}>More Details</button>
                    </div>
                </div>
                
            </div>
            <div className={ details.showDetails ? "background-gradient-none" : "background-gradient" }></div> { /* Here */ }

            <div className={ details.showDetails ? "pop-up-video-show" : "pop-up-video"}>
                <iframe 
                    // width="1920" 
                    // height="1080"
                    src="https://www.youtube.com/embed/oQMc7Sq36mI?&autoplay=1&loop=1&start=140&modestbranding=1&controls=0&mute=0" 
                    frameborder="0"
                    allowfullscreen>
                </iframe>
                
                {/* <img src={ backdrop } alt={ movie.title } /> */}
            </div>
        </div>
  )
}

export default MoviePopUp;