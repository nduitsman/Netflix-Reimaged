import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/home/Header';
import './Watchlist.css'

function WatchList() {
    let [watchListArr, setWatchListArr] = useState([]);
    const activeUser = useSelector(state => state.userReducer);

    async function getWatchlist() {
        const configs = {
            method: "POST",
            body: JSON.stringify({ id: activeUser.userId }),
            headers: {
              "Content-Type": "application/json",
            },
        }

        const response = await fetch('https://netflix-reimagined.herokuapp.com/auth/watchlist', configs);
        const watchList = await response.json();
        
        setWatchListArr(watchList.movies); 
    }

    useEffect(() => {
        getWatchlist();
    }, []);

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
        </div>
    )
}

export default WatchList;