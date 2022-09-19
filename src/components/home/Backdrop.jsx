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

            if (json.results[randomIndex].name) {
                movieTitle = json.results[randomIndex].name;
                dispatch(setPreview(backdrop_path, movieTitle));
            } else {
                movieTitle = json.results[randomIndex].title;
                dispatch(setPreview(backdrop_path, movieTitle));
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