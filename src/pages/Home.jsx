import Header from '../components/home/Header';
import Main from '../components/home/Main';
import MoviePopUp from '../components/home/MoviePopUp';

function Home() {
    
    return (
        <>
            <Header />
            <Main />
            <MoviePopUp apikey={ process.env.REACT_APP_API_KEY_TMDB} id={ 985939 }/>
        </>
    )
}

export default Home;