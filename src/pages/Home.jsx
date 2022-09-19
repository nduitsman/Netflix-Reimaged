
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hidePopUp } from '../actions';
import Header from '../components/home/Header';
import Backdrop from '../components/home/Backdrop';
import Main from '../components/home/Main';
import MoviePopUp from '../components/home/MoviePopUp';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
  
        const handleMovement = event => {
          dispatch(hidePopUp());
        };
    
        window.addEventListener('scroll', handleMovement);
      }, []);
    

    return (
        <div className='home-page'>
            <Backdrop />
            <Header />
            
            <Main />
            <MoviePopUp apikey={ process.env.REACT_APP_API_KEY_TMDB}/>
        </div>
    )
}

export default Home;