import './Main.css';
import MoviesList from './MoviesList';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hidePopUp } from '../../actions';

function Main() {
    const ref = useRef(null);
    const backdropData = useSelector(state => state.backdropReducer);
    const backdropTitle = backdropData.movieTitle

    const dispatch = useDispatch();

    useEffect(() => {
    }, []);
    
    const handleClick = event => {
        if (event.target.className !== 'card-image') {
            dispatch(hidePopUp());
        }
    };
        
    

    return (
        <div className="horizontalContainer" onClick={ (event) => { handleClick(event) } }>
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