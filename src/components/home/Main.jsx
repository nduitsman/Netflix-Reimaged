import './Main.css';
import MoviesList from './MoviesList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showDetails, hidePopUp, updateId, hideDetails, transitionDetails, transitionOffDetails, previewNotInWatchlist, previewInWatchlist } from '../../actions'
import Genres from './Genres';

function Main() {
    const activeUser = useSelector(state => state.userReducer);
    const backdropData = useSelector(state => state.backdropReducer);
    const popUp = useSelector(state => state.popUpReducer);
    const details = useSelector(state => state.detailsReducer);
    const backdropTitle = backdropData.movieTitle
    const dispatch = useDispatch();

    useEffect(() => {
        checkWatchlist()
    }, []);

    const handleClick = event => {
        if (event.target.className !== 'card-image') {
            dispatch(hidePopUp());
        }
    };


    function checkWatchlist() {
        const configs = {
            method: "POST",
            body: JSON.stringify({ userId: activeUser.userId, movieId: backdropData.movieId }),
            headers: {
              "Content-Type": "application/json",
            },
        }

        fetch(`https://netflix-reimagined.herokuapp.com/auth/checkWatchlist`, configs)
        .then((res)=> res.json())
        .then((isInWatchlist) => {
            if (isInWatchlist) {
                dispatch(previewInWatchlist());
            } else {
                dispatch(previewNotInWatchlist());
            }
        })
        .catch(console.error)
    }

    function handleDetailsClick() {
        fetchTrailer(backdropTitle);
        if(!details.showDetails){
            dispatch(showDetails(popUp.movieId, backdropTitle ));
            dispatch(transitionDetails());
        } else {
            dispatch(hideDetails());
            dispatch(transitionOffDetails());
        }
    }

    function fetchTrailer(title) {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${ title }%20trailer&key=AIzaSyAKl4917EDlNdDl_ckFnOLc5gaYIR7uWco`)
        .then((res)=> res.json())
        .then((json) => {
            let trailerId = json.items[0].id.videoId;
            dispatch(updateId(trailerId));
        })
        .catch(console.error)
    }

    return (
        <div className="horizontalContainer" onClick={(event) => { handleClick(event) }}>
            <div className="preview-details">
                <h1 className='preview-title'>{ backdropTitle.toUpperCase() }</h1>
                <div><button className='preview-buttons' onClick={() => { handleDetailsClick() }}>More Details</button></div> 
            </div>
            <Genres />
            <h1 className='horizontalList'>Trending Today</h1>
            <MoviesList url={process.env.REACT_APP_TRENDING_URL} />
            <h1 className='horizontalList'>Popular Titles</h1>
            <MoviesList url={process.env.REACT_APP_POPULAR_URL} />
            <h1 className='horizontalList'>Top Rated</h1>
            <MoviesList url={process.env.REACT_APP_TOP_RATED_URL} />
            <h1 className='horizontalList'>Upcoming</h1>
            <MoviesList url={process.env.REACT_APP_UPCOMING_URL} />
            <h1 className='horizontalList'>Now Playing</h1>
            <MoviesList url={process.env.REACT_APP_NOW_PLAYING_URL} />
        </div>
    )
}

export default Main;