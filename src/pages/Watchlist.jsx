
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hidePopUp } from '../actions';
import Header from '../components/home/Header';
import Backdrop from '../components/home/Backdrop';
import Main from '../components/home/Main';
import MoviePopUp from '../components/home/MoviePopUp';
import Show from '../components/home/Show';

function Home() {
    const dispatch = useDispatch();
    const activeUser = useSelector(state => state.userReducer);

    console.log('Watchlist Array');

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
        console.log(watchList.movies); //TODO: WE GOT THE ARRAY 
    }


    useEffect(() => {
        getWatchlist();
    }, []);

    return (
        <div className='home-page'>
            <Header />
            <h1>WATCH LIST</h1>
            <Show apikey={ process.env.REACT_APP_API_KEY_OMDB} />
            <MoviePopUp apikey={ process.env.REACT_APP_API_KEY_TMDB}/>
        </div>
    )
}

export default Home;