import React from 'react'
// import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

let moviesArr= []
let pageCount = 0;

function MoviesList() {

    let [moviesOne, setMoviesOne] = useState([]);

    useEffect( ()=> {
        for(let i = 1; i < 5; i++){
                fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=98855691d0e25912b288deedbe467398&page=${i}`)
                .then((res)=> res.json())
                .then((json) => {
                    setTimeout(()=> {
                        setMoviesOne(prevState => ([
                        ...prevState, json
                        ]))
                    },1000)

                    pageCount++;  
                })
                .catch(console.error)
        }
    },[]);


    console.log(moviesOne[pageCount])
    if(moviesOne[0] && moviesOne[pageCount]){
        for(let i = 0; i < pageCount; i++){
            moviesArr.push(...moviesOne[i].results)
        }
    } else {
        return <h1>Loading...</h1>
    }
    // console.log(moviesArr)

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
                <div className='movieCard'>
                    <h1>{movieTitle}</h1>
                    <img src={poster} alt={movie.title}></img>
                </div>     
            )
        })}
    </section>
  )
}

export default MoviesList
