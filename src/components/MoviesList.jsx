import React from 'react'
// import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

let moviesArr= []
let arr1 = []
let arr2 = []

function MoviesList() {

    let [moviesOne, setMoviesOne] = useState([]);
    let [moviesTwo, setMoviesTwo] = useState([]);
    
    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=98855691d0e25912b288deedbe467398&page=1`)
        .then((res)=> res.json())
        .then((json) => {
            setMoviesOne(json)
            arr1.push(...moviesOne.results)
        })
        .catch(console.error)
    },[]);

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=98855691d0e25912b288deedbe467398&page=2`)
        .then((res)=> res.json())
        .then((json) => {
            setMoviesTwo(json)
            arr2.push(...moviesTwo.results)
        })
        .catch(console.error)
    },[]);


    // console.log(moviesOne.results, moviesTwo.results)
    moviesArr = [...arr1, ... arr2]
    console.log(moviesArr)

  return (

    <section className = "moviesList">
        {moviesArr.map((movie) => {
            let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            let movieTitle = '';
            if(movie.title) {
                movieTitle = movie.title;
            } else {
                movieTitle = movie.name;
            }
            return (
                <div>
                    {/* <h1>{movieTitle}</h1> */}
                    <img src={poster} alt={movie.title}></img>
                </div>     
            )
        })}
    </section>
  )
}

export default MoviesList
