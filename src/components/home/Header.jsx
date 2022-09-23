import './Header.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Header(props) {
    const activeUser = useSelector(state => state.userReducer);
    const isLoggedIn = useSelector(state => state.loggedReducer);

    return (
        <div className="navHeader">

            <div className="nav">
                <div className='logos'>
                    <img src="/icons/icons8-netflix (1).svg" alt="home-logo" className='logoT' />
                    <img src='https://fontmeme.com/permalink/220922/08ec9f704160b7fa96e6b73e4f459b6b.png' alt='home-logo' className='logoB' />
                </div>
                <Link to={'/'}>Home</Link>
                <Link to={'/movies'}>All Movies</Link>
                <Link to={activeUser.username !== '' ? '/watchlist' : '/login'}>Watch List</Link>
            </div>

            <div className="account">
                {(isLoggedIn) ? <p>{activeUser.username}</p> : <Link to='/login'><p>Login/Register</p></Link>}
                <div className='dropdown'>
                    <img src="/icons/icons8-male-user.svg" alt="account-icon" />
                    <div className='dropdown-element-container'>
                        <Link to='/watchlist'>
                            <p className='dropdown-element'>Watchlist</p>
                        </Link>

                        {(activeUser.username) ? 
                            <Link to='/login'><p className='dropdown-element' onClick={() => { props.logout(activeUser.userId) }}>Logout</p></Link> : null }
                     
                        <Link to='/login' >
                            <p className='dropdown-element account-delete' onClick={()=> { props.deleteAccount(activeUser.userId) }}>Delete Account</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;