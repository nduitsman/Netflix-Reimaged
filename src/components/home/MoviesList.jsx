import React from 'react'
// import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
// require('dotenv').config;


function MoviesList(props) {
    let [moviesOne, setMoviesOne] = useState([]);

    useEffect(()=> {
        fetch(`${props.url}`)
        .then((res)=> res.json())
        .then((json) => {
            setMoviesOne(json)
        })
        .catch(console.error)
    },[])
    
  return (
    <section className = 'moviesList'>

        {moviesOne.results?.map((movie) => {
            let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            let movieTitle = '';
            if(movie.title) {
                movieTitle = movie.title;
            } else {
                movieTitle = movie.name;
            }
            return (
                <div className='indexCard'>
                    {/* <h1>{movieTitle}</h1> */}
                    <img src={poster} alt={movieTitle}></img>
                </div>     
            )
        })}
    </section>
  )
}

export default MoviesList
