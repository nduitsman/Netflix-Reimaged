
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hidePopUp } from '../actions';
import Header from '../components/home/Header';
import Backdrop from '../components/home/Backdrop';
import Main from '../components/home/Main';
import MoviePopUp from '../components/home/MoviePopUp';
import Show from '../components/home/Show';
import './Watchlist.css'

function WatchList() {
    let [watchListArr, setWatchListArr] = useState([]);

    const dispatch = useDispatch();
    const activeUser = useSelector(state => state.userReducer);


    async function getWatchlist() {
        const configs = {
            method: "POST",
            body: JSON.stringify({ id: activeUser.userId }),
            headers: {
              "Content-Type": "application/json",
            },
        }

        const response = await fetch('http://localhost:4000/auth/watchlist', configs);
        const watchList = await response.json();
        
        setWatchListArr(watchList.movies); 
    }


    useEffect(() => {
        getWatchlist();
    }, []);

    console.log(watchListArr)

    return (
        <div className='watchlist-page'>
            <Header />
            <h1 className = 'horizontalList'>WATCH LIST</h1>
            <div className = 'watchlist'>
                {watchListArr?.map((movie) => {
                    return (
                        <div>
                            <img src={movie.posterURL} alt='movie.movieTitle'></img>
                        </div>
                    )} 
                )}
            </div>
           
{/*    
            <Show apikey={ process.env.REACT_APP_API_KEY_OMDB} />
            <MoviePopUp apikey={ process.env.REACT_APP_API_KEY_TMDB}/> */}
        </div>
    )
}

export default WatchList;