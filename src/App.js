import './App.css'
import Home from './pages/Home';
import MoviesList from './components/MoviesList';
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="horizontalContainer">
      <h1 className='horizontalList'>Trending Today</h1>
      <MoviesList url={process.env.REACT_APP_TRENDING_URL} heading={'Trending Today'} />
      <h1 className='horizontalList'>Popular Titles</h1>
      <MoviesList url={process.env.REACT_APP_POPULAR_URL} heading={'Popular Titles'} />
      <h1 className='horizontalList'>Top Rated</h1>
      <MoviesList url={process.env.REACT_APP_TOP_RATED_URL} heading={'Top Rated'} />
      <h1 className='horizontalList'>Upcoming</h1>
      <MoviesList url={process.env.REACT_APP_UPCOMING_URL} heading={'Upcoming'} />
      <h1 className='horizontalList'>Now Playing</h1>
      <MoviesList url={process.env.REACT_APP_NOW_PLAYING_URL} heading={'Now Playing'} />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
