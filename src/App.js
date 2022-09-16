
import './App.css';
import MoviesList from './components/MoviesList';
// require('dotenv').config;


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
