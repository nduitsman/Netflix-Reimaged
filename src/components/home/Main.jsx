import MoviesList from './MoviesList';

function Main() {
    return (
        <div className="horizontalContainer">
            <h1 className = 'horizontalList'>Trending Today</h1>
            <MoviesList url = {process.env.REACT_APP_TRENDING_URL} heading={'Trending Today'}/>
            <h1 className = 'horizontalList'>Popular Titles</h1>
            <MoviesList url = {process.env.REACT_APP_POPULAR_URL} heading={'Popular Titles'}/>
            <h1 className = 'horizontalList'>Top Rated</h1>
            <MoviesList url = {process.env.REACT_APP_TOP_RATED_URL} heading={'Top Rated'}/>
            <h1 className = 'horizontalList'>Upcoming</h1>
            <MoviesList url = {process.env.REACT_APP_UPCOMING_URL} heading={'Upcoming'}/>
            <h1 className = 'horizontalList'>Now Playing</h1>
            <MoviesList url = {process.env.REACT_APP_NOW_PLAYING_URL} heading={'Now Playing'}/>
        </div>
    )
}

export default Main;