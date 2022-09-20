
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