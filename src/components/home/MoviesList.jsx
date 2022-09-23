import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showPopUp, hidePopUp, updateId } from '../../actions';

function MoviesList(props) {
    let [moviesOne, setMoviesOne] = useState([]);
    const popUp = useSelector(state => state.popUpReducer);
    let popUpHidden = true;
    const dispatch = useDispatch();

    function handleClick(movieId, movieTitle) {
        if (!popUp.isHidden && (popUp.movieId === movieId)) {
            dispatch(hidePopUp(movieId, movieTitle));
            popUpHidden = !popUpHidden;
        } else if (!popUp.isHidden && (popUp.movieId !== movieId)) {
            fetchTrailer(movieTitle)
            dispatch(showPopUp(movieId, movieTitle));
            popUpHidden = !popUpHidden;
        } else {
            fetchTrailer(movieTitle)
            dispatch(showPopUp(movieId, movieTitle));
            popUpHidden = !popUpHidden;
        }
    }

    function fetchTrailer(title) {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${ title }%20trailer&key=AIzaSyCVAjMhStDjG2OltI6HZ98uyd9PmiNwDtc`)
        .then((res)=> res.json())
        .then((json) => {
            let trailerId = json.items[0].id.videoId;
            dispatch(updateId(trailerId));
        })
        .catch(console.error)
    }

    useEffect(()=> {
        fetch(`${props.url}`)
        .then((res)=> res.json())
        .then((json) => {
            setMoviesOne(json);
        })
        .catch(console.error)
    },[])
    
  return (
    <section className = 'moviesList'>

        {moviesOne.results?.map((movie, index) => {
            let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            let movieTitle = '';
            if(movie.title) {
                movieTitle = movie.title;
            } else {
                movieTitle = movie.name;
            }
            return (
                <div className='indexCard' onClick={() => { handleClick(movie.id, movieTitle) } } key={ index }>
                    <img className='card-image' src={poster} alt={movieTitle}></img>
                </div>     
            )
        })}
    </section>
  )
}


export default MoviesList
