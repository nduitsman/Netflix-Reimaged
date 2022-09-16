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
      <Home />
    </div>
  );
}

export default App;
