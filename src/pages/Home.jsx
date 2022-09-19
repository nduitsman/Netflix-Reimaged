import Header from '../components/home/Header';
import Backdrop from '../components/home/Backdrop';
import Main from '../components/home/Main';
import MoviePopUp from '../components/home/MoviePopUp';
import Show from '../components/home/Show';

function Home() {
    return (
        <div className='home-page'>
            <Backdrop />
            <Header />
            
            <Main />
            <Show apikey={ process.env.REACT_APP_API_KEY_OMDB} title={'fall'}/>
            <MoviePopUp apikey={ process.env.REACT_APP_API_KEY_TMDB}/>
        </div>
    )
}

export default Home;