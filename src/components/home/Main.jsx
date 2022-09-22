import './Main.css';
import MoviesList from './MoviesList';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showDetails, hidePopUp, updateId, hideDetails, transitionDetails, transitionOffDetails, notInWatchlist, inWatchlist, previewNotInWatchlist, previewInWatchlist } from '../../actions'
import Genres from './Genres';
import { useNavigate } from 'react-router-dom';

function Main() {
    const ref = useRef(null);
    const activeUser = useSelector(state => state.userReducer);
    const backdropData = useSelector(state => state.backdropReducer);
    const watchListButton = useSelector(state => state.watchListButtonReducer);
    const previewWatchListButton = useSelector(state => state.previewWatchListButtonReducer);
    
    const popUp = useSelector(state => state.popUpReducer);
    const details = useSelector(state => state.detailsReducer);
    const backdropTitle = backdropData.movieTitle
    const navigate = useNavigate();
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
        console.log('Check Watchlist Called')
        const configs = {
            method: "POST",
            body: JSON.stringify({ userId: activeUser.userId, movieId: backdropData.movieId }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        // console.log(activeUser.userId , popUp.movieId )
        fetch(`http://localhost:4000/auth/checkWatchlist`, configs)
        .then((res)=> res.json())
        .then((isInWatchlist) => {
            // console.log(json);
            
            //dispatch popUp.movieWasFound change to true vs false
            if (isInWatchlist) {
                console.log('In watchlist')
                dispatch(previewInWatchlist());
            } else {
                console.log('Not in watchlist')
                dispatch(previewNotInWatchlist());
            }
            
        })
        .catch(console.error)
    }

    function handleAddToWatchlist() {
        if (!activeUser.userId) {
            navigate('/login');
        }
        const configs = {
            method: "PUT",
            body: JSON.stringify({ id: activeUser.userId, movie: { movieId: backdropData.movieId, movieTitle: backdropTitle, posterURL: backdropData.posterURL } }),
            headers: {
              "Content-Type": "application/json",
            },
        }
        // console.log(activeUser.userId)
        // console.log(popUp.movieId, movieTitle, poster);
        
        console.log('Before Fetch');
        if (!previewWatchListButton.movieWasFound) {
            fetch(`http://localhost:4000/auth/addToWatchlist`, configs)
            .then((res)=> {
                console.log(res.json());
                checkWatchlist();
                // console.log('After CheckWatchlist');
            })
            .catch(console.error)
        } else {
            fetch(`http://localhost:4000/auth/removeFromWatchlist`, configs)
            .then((res)=> {
                console.log(res.json());
                checkWatchlist();
                // console.log('After remove');
            })
            .catch(console.error)
        }
    }

    function handleDetailsClick() {
        fetchTrailer(backdropTitle);
        if(!details.showDetails){
            // console.log(movieTitle)
            dispatch(showDetails(popUp.movieId, backdropTitle ));
            dispatch(transitionDetails());
        } else {
            dispatch(hideDetails());
            dispatch(transitionOffDetails());
        }

    }

    function fetchTrailer(title) {
        console.log(title);
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${ title }%20trailer&key=AIzaSyAKl4917EDlNdDl_ckFnOLc5gaYIR7uWco`)
        .then((res)=> res.json())
        .then((json) => {
            console.log(json)
            let trailerId = json.items[0].id.videoId;
            dispatch(updateId(trailerId));
        })
        .catch(console.error)
    }

    return (
        <div className="horizontalContainer" onClick={ (event) => { handleClick(event) } }>
            <div className="preview-details">
                <h1 className='preview-title'>{ backdropTitle.toUpperCase() }</h1>
                <div><button className='preview-buttons' onClick={() => { handleDetailsClick() }}>More Details</button></div> 
            </div>
            <Genres />
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