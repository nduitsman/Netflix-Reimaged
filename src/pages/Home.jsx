
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { hidePopUp } from '../actions';
import Header from '../components/home/Header';
import Backdrop from '../components/home/Backdrop';
import Main from '../components/home/Main';
import MoviePopUp from '../components/home/MoviePopUp';
import Show from '../components/home/Show';
import Footer from '../components/home/Footer';

function Home(props) {
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
      <Header logout={props.logout} deleteAccount={props.deleteAccount} />
      <Main />
      <Show apikey={process.env.REACT_APP_API_KEY_OMDB} />
      <MoviePopUp apikey={process.env.REACT_APP_API_KEY_TMDB} />
      <Footer />
    </div>
  )
}

export default Home;