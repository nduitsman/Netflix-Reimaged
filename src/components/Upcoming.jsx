import React from 'react'
// import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

let moviesArr= []
let arr1 = []

function Upcoming() {

    let [moviesOne, setMoviesOne] = useState([]);
    
    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=98855691d0e25912b288deedbe467398&language=en-US&page=1`)
        .then((res)=> res.json())
        .then((json) => {
            setMoviesOne(json)
        })
        .catch(console.error)
    },[]);

   
    moviesArr = [moviesOne.results]
    
  return (

    <section className = "moviesList">
        {moviesOne.results?.map((movie) => {
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

export default Upcoming
