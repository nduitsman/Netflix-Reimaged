import './Backdrop.css';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPreview } from '../../actions';

function Backdrop() {
    const dispatch = useDispatch();
    const backdropData = useSelector(state => state.backdropReducer);


    
    function fetchMovie() {
        fetch(process.env.REACT_APP_TRENDING_URL)
        .then((res)=> res.json())
        .then((json) => {
            // setMovie(json);
            let randomIndex = Math.floor(Math.random() * 20);
            let backdrop_path = 'https://image.tmdb.org/t/p/original' + json.results[randomIndex].backdrop_path;
            let movieTitle = '';
            let movieId = json.results[randomIndex].id;
            let posterURL = `https://image.tmdb.org/t/p/w500${json.results[randomIndex].poster_path}`;
            
            console.log(json.results[randomIndex])
            console.log(movieId);
            console.log(posterURL);
            if (json.results[randomIndex].name) {
                movieTitle = json.results[randomIndex].name;
                dispatch(setPreview(backdrop_path, movieTitle, movieId, posterURL));
            } else {
                movieTitle = json.results[randomIndex].title;
                dispatch(setPreview(backdrop_path, movieTitle, movieId, posterURL));
            }
        })
        .catch(console.error)
    }

    // console.log(backdropData);


    useEffect(()=> {
        fetchMovie();
    },[])

  return (
    <>
        <div className='backdrop-wrapper'>
            <img className='backdrop-image' src={ backdropData.backdrop_path } alt={ backdropData.movieTitle } />   
        </div>
    </>
  )
}

export default Backdrop