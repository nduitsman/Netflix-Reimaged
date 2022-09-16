import './App.css';
import Home from './pages/Home'
import MoviesList from './components/MoviesList';
import Trending from './components/Trending';
import TopRated from './components/TopRated';
import Popular from './components/Popular';
import Upcoming from './components/Upcoming';
import NowPlaying from './components/NowPlaying';


function App() {
  return (
    <div className="App">
      <MoviesList url = {process.env.REACT_APP_NOW_PLAYING_URL}/>
      <MoviesList url = {process.env.REACT_APP_POPULAR_URL}/>
      <MoviesList url = {process.env.REACT_APP_TOP_RATED_URL}/>
      <MoviesList url = {process.env.REACT_APP_TRENDING_URL}/>
      <MoviesList url = {process.env.REACT_APP_UPCOMING_URL}/>
    </div>
  );
}

export default App;
