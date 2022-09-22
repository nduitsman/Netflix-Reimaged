import './Header.css';

import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../../actions';
import { useNavigate, Link } from 'react-router-dom'

function Header() {
    const dispatch = useDispatch();

    const activeUser = useSelector(state => state.userReducer);
    
    return (
        <div className="navHeader">
            
            <div className="nav"><img src="/icons/icons8-netflix (1).svg" alt="home-logo" /><Link to={ '/' }>Home</Link><Link to={ '/movies' }>All Movies</Link><Link to={ activeUser.username !== '' ? '/watchlist' : '/login' }>Watch List</Link></div>
            
            <div className="account">
                {console.log(activeUser.username)}
                {(activeUser.username) ? <p>{ activeUser.username }</p> : <Link to='/login'><p>Login/Register</p></Link>}
                
                <Link to='/login'><img src="/icons/icons8-male-user.svg" alt="account-icon" /></Link>
            </div>
        </div>
        
    )
}

export default Header;