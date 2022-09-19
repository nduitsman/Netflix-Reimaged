import React from 'react';
import { useState, useEffect } from 'react';

function Show(props) {

    let [movie, setMovie] = useState([]);

    useEffect(()=> {
        fetch(`https://www.omdbapi.com/?apikey=${[props.apikey]}&t=${props.title}`)
        .then((res)=> res.json())
        .then((json) => {
            setMovie(json);
        })
        .catch(console.error)
    },[])
    console.log(movie)
  return (
    <div>
       <h1>{ movie.Title }</h1>
    </div>
  )
}

export default Show