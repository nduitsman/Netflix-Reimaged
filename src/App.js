import logo from './logo.svg';
import './App.css';
import Trending from './components/Trending';
import TopRated from './components/TopRated';
import Popular from './components/Popular';
import Upcoming from './components/Upcoming';
import NowPlaying from './components/NowPlaying';

function App() {
  return (
    <div className="App">
      <NowPlaying />
    </div>
  );
}

export default App;
