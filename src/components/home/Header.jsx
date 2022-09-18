import './Header.css';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from '../../actions';

function Header() {
    const dispatch = useDispatch()
    return (
        <div className="header">
            <div className="nav"><a href="#">Home</a><a href="#">Movies</a><a href="#">TV Series</a><a href="#">Kids</a><a href="#">Watch List</a></div>
            <button onClick={ () => { dispatch(signIn()) } }>Sign In</button>
            <button onClick={ () => { dispatch(signOut()) } }>Sign Out</button>
            <div className="account"><img src="/icons/icons8-male-user.svg" alt="account-icon" /></div>
        </div>
    )
}

export default Header;