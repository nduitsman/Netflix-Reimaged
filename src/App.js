import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Watchlist from './pages/Watchlist';
import Register from './pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { clearUserToken, setUserToken } from './utils/authToken';
import { setCurrentUser, signOut, signIn } from './actions';

function App() {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const registerUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }

      const newUser = await fetch("http://localhost:4000/auth/register", configs)

      const parsedUser = await newUser.json();

      setUserToken(parsedUser.token);
      setIsAuthenticated(parsedUser.loggedIn);
      return parsedUser;
    } catch (err) {
      console.log(err);
      clearUserToken();
      setIsAuthenticated(false);
    }
  }

  const loginUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
      const response = await fetch("http://localhost:4000/auth/login", configs)
      const currentUser = await response.json();



      dispatch(setCurrentUser(currentUser.user.username, currentUser.user._id));
      dispatch(signIn())
      setUserToken(currentUser.token);
      setIsAuthenticated(currentUser.loggedIn);

      return currentUser;
    } catch (err) {
      clearUserToken();
      setIsAuthenticated(false);
    }
  }

  const deleteAccount = async (data) => {
    try {
      const configs = {
        method: "DELETE",
        body: JSON.stringify(data), //! we need current user id here
        headers: {
          "Content-Type": "application/json"
        }
      }
      const response = await fetch('http://localhost4000:/auth/deleteAccount', configs);
      console.log(response); //show to user?
    } catch (err) {
      console.log(err);
    }
  }

  const logout = async (data) => {
    console.log('data: '+ data)
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify({data: data}), //! we need current user id here
        headers: {
          "Content-Type": 'application/json'
        }
      }
      const response = await fetch("http://localhost:4000/movie/logout", configs);

      const returnedUser = await response.json();
      dispatch(signOut())
      setIsAuthenticated(returnedUser.isLoggedIn);
      setUserToken(returnedUser.token);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Routes>
      <Route path='/register' element={<Register signUp={registerUser} />}></Route>
      <Route path='/login' element={<Login logIn={loginUser} />}></Route>
      <Route path='/watchlist' element={<Watchlist />}></Route>
      <Route path='/' element={<Home logout={logout} deleteAccount={deleteAccount} />}></Route>
    </Routes>
  );



  //  const isLogged = useSelector(state => state.loggedReducer);
  // return (
  //   <>
  //     { isLogged ? <Home /> : <Login />}
  //   </>

  //<Routes>
  //  <Route path='/' element={<Home />}></Route>
  //  <Route path='/login' element={<Login />}></Route>
  //</Routes>
  // );
}

export default App;
