import './Main.css';
import MoviesList from './MoviesList';
import { useDispatch, useSelector } from 'react-redux';

function Main() {
    const backdropData = useSelector(state => state.backdropReducer);
    const backdropTitle = backdropData.movieTitle

    return (
        <div className="horizontalContainer">
            <div className="preview-details">
                <h1 className='preview-title'>{ backdropTitle.toUpperCase() }</h1>
                <div><button className='preview-buttons'>Add To Watch List</button><button className='preview-buttons'>More Details</button></div>
                
            </div>
            <h1 className = 'horizontalList'>Trending Today</h1>
            <MoviesList url = {process.env.REACT_APP_TRENDING_URL} />
            <h1 className = 'horizontalList'>Popular Titles</h1>
            <MoviesList url = {process.env.REACT_APP_POPULAR_URL} />
            <h1 className = 'horizontalList'>Top Rated</h1>
            <MoviesList url = {process.env.REACT_APP_TOP_RATED_URL} />
            <h1 className = 'horizontalList'>Upcoming</h1>
            <MoviesList url = {process.env.REACT_APP_UPCOMING_URL} />
            <h1 className = 'horizontalList'>Now Playing</h1>
            <MoviesList url = {process.env.REACT_APP_NOW_PLAYING_URL} />
        </div>
    )
}

export default Main;