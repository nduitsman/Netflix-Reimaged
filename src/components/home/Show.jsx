import React from 'react';
import { useState, useEffect } from 'react';
import './Show.css';
import { useDispatch, useSelector } from 'react-redux';
import { hideDetails, hidePopUp, transitionOffDetails, notInWatchlist, inWatchlist } from '../../actions';
import { useNavigate } from 'react-router-dom';

function Show(props) {
    let [movie, setMovie] = useState([]);
    const details = useSelector(state => state.detailsReducer);
    const popUp = useSelector(state => state.popUpReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const activeUser = useSelector(state => state.userReducer);
    let poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const watchListButton = useSelector(state => state.watchListButtonReducer);

    function handleBack() {
        dispatch(hideDetails());
        dispatch(hidePopUp());
        dispatch(transitionOffDetails());
    }

    function handleAddToWatchlist() {
        if (!activeUser.userId) {
            navigate('/login');
        }
        const configs = {
            method: "PUT",
            body: JSON.stringify({ id: activeUser.userId, movie: { movieId: popUp.movieId, movieTitle: details.title, posterURL: poster } }),
            headers: {
              "Content-Type": "application/json",
            },
        }
       
        if (!watchListButton.movieWasFound) {
            fetch(`https://netflix-reimagined.herokuapp.com/auth/addToWatchlist`, configs)
            .then(()=> {
                checkWatchlist();
            })
            .catch(console.error)
        } else {
            fetch(`https://netflix-reimagined.herokuapp.com/auth/removeFromWatchlist`, configs)
            .then((res)=> {
                checkWatchlist();
            })
            .catch(console.error)
        }
    }

    function checkWatchlist() {
        const configs = {
            method: "POST",
            body: JSON.stringify({ userId: activeUser.userId, movieId: popUp.movieId }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        fetch(`https://netflix-reimagined.herokuapp.com/auth/checkWatchlist`, configs)
        .then((res)=> res.json())
        .then((isInWatchlist) => {
            if (isInWatchlist) {
                dispatch(inWatchlist());
            } else {
                dispatch(notInWatchlist());
            }
            
        })
        .catch(console.error)
    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${props.apikey}&t=${details.title}`)
            .then((res) => res.json())
            .then((json) => {
                setMovie(json);
            })
            .catch(console.error)
    }, [details])

    let ratingsIMDB = 'N/A';
    let ratingsRotten = 'N/A';
    let ratingsMeta = 'N/A';

    if (movie.Ratings) {
        for (let i = 0; i < movie.Ratings.length; i++) {
            switch(movie.Ratings[i].Source) {
                case 'Internet Movie Database':
                    ratingsIMDB = movie.Ratings[i].Value;
                    break;
                case 'Rotten Tomatoes':
                    ratingsRotten = movie.Ratings[i].Value;
                    break;
                case 'Metacritic':
                    ratingsMeta = movie.Ratings[i].Value;
                    break;
                default:
                    console.log('Rating Source Not Found');
                }
            
        }
    }

    return (
        <div className = 'showContainer'>
            <div className = { details.isHidden ? 'movie-show-page-hidden' : 'movie-show-page'}>
                <img className='back-arrow' src="./icons/icons8-back.svg" alt="back-arrow" onClick={() => { handleBack() }}/>
                <div className = 'movie-details-container'>
                    <h1>{ movie.Title }</h1>
                    <button onClick={ () => { handleAddToWatchlist() }}>{ watchListButton.movieWasFound && activeUser.userId ? 'Remove From Watchlist' : 'Add To Watchlist' }</button>
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