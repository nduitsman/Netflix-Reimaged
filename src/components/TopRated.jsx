import React from 'react'
import { useState, useEffect } from 'react'

function TopRated() {
    let [movies, setMovies] = useState([]);
    
    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=98855691d0e25912b288deedbe467398&language=en-US&page=1`)
        .then((res)=> res.json())
        .then((json) => {
            setMovies(json)
        })
        .catch(console.error)
    },[]);

   console.log(movies.results)
    // moviesArr = [moviesOne.results]
    
  return (
    <section className = "moviesList">
        {movies.results?.map((movie) => {
            let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            let movieTitle = '';
            if(movie.title) {
                movieTitle = movie.title;
            } else {
                movieTitle = movie.name;
            }
            return (
                <div>
                    <h1>{movieTitle}</h1>
                    <img src={poster} alt={movie.title}></img>
                </div>     
            )
        })}
    </section>
  )
}

export default TopRated