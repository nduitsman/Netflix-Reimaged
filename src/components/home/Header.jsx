import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../../actions';

function Header() {
    const dispatch = useDispatch();

    const activeUser = useSelector(state => state.userReducer)
    
    console.log(activeUser);

    return (
        <div className="navHeader">
            <div className="nav"><a href="#">Home</a><a href="#">All Movies</a><a href="#">Watch List</a></div>
            <p>{ activeUser.username }</p>
            <div className="account"><img src="/icons/icons8-male-user.svg" alt="account-icon" /></div>
        </div>
    )
}

export default Header;