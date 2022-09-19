import React from 'react';
import { useState, useEffect } from 'react';
import './Show.css';
import { useDispatch, useSelector } from 'react-redux';
import { hideDetails, hidePopUp, transitionOffDetails } from '../../actions';

function Show(props) {
    
    let [movie, setMovie] = useState([]);
    const details = useSelector(state => state.detailsReducer);
    const dispatch = useDispatch();

    function handleBack() {
        // set details page to hide
        // set pop up to hide
        dispatch(hideDetails());
        dispatch(hidePopUp());
        dispatch(transitionOffDetails());
    }
    console.log(details);
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${props.apikey}&t=${details.title}`)
            .then((res) => res.json())
            .then((json) => {
                setMovie(json);
            })
            .catch(console.error)
    }, [])

    let ratingsIMDB = '';
    let ratingsRotten = '';
    let ratingsMeta = '';

    if (movie.Ratings) {
        if (movie.Ratings[0] !== 'N/A') {
            ratingsIMDB = movie.Ratings[0].Value;
            // display logo IMDB
        }
        if (movie.Ratings[1] !== 'N/A') {
            ratingsRotten = movie.Ratings[1].Value;
            // display logo Rotten Tomatoes
        }
        if (movie.Ratings[2] !== 'N/A') {
            ratingsMeta = movie.Ratings[2].Value;
            // display logo Metacritic
        }
    }

// console.log(details.isHidden)
    return (
        <div className = 'showContainer'>
            <div className = { details.isHidden ? 'movie-show-page-hidden' : 'movie-show-page'}>
                <img className='back-arrow' src="./icons/icons8-back.svg" alt="back-arrow" onClick={() => { handleBack() }}/>
                <div className = 'movie-details-container'>
                    <h1>{ movie.Title }</h1>
                    <button>Add to Watch List</button>
                    <h2><span className = 'details-span'>Genre: </span>{ movie.Genre }</h2>
                    <h2><span className = 'details-span'>Director: </span> { movie.Director }</h2>
                    <h2><span className = 'details-span'>Cast: </span> { movie.Actors }</h2>
                    <div className='details-plot'>
                        <h2>{ movie.Plot }</h2>
                    </div>
                </div>
                <div className = 'movie-metadata-container'>
                    <div className = 'movie-ratings'>
                        <div className = 'ratings'>
                            <img src='/icons/IMDB_icon.svg' alt='IMDB icon'/>
                            <h2>{ ratingsIMDB }</h2>
                        </div>
                        <div className = 'ratings'>
                            <img src='/icons/Rotten.svg' alt='Rotten Tomatoes icon'/>
                            <h2> { ratingsRotten }</h2>
                        </div>
                        <div className = 'ratings'>
                            <img src='/icons/Metacritic.svg' alt='Rotten Tomatoes icon'/>
                            <h2>{ ratingsMeta }</h2>
                        </div>
                    </div>
                    <div className = 'formatting'>
                        <div className = 'format4K'><p>4K</p></div>
                        <div>HDR</div>
                        <div>SDR</div>
                        <div>CC</div>
                    </div>
                    <div className = 'movie-year-runtime'>
                        <h2>{ movie.Year }</h2>
                        <h2>•</h2>
                        <h2>{ movie.Runtime }</h2>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Show