import './Header.css';

function Header() {
    return (
        <div className="navHeader">
            <div className="nav"><a href="#">Home</a><a href="#">Movies</a><a href="#">TV Series</a><a href="#">Kids</a><a href="#">Watch List</a></div>
            <div className="account"><img src="/icons/icons8-male-user.svg" alt="account-icon" /></div>
        </div>
    )
}

export default Header;