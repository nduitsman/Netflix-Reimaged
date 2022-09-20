import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { clearUserToken, setUserToken } from './utils/authToken';

function App() {
  const [currentUser, setCurrentUser] = useState({});
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
      setCurrentUser(parsedUser.currentUser);
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
      const user = await response.json();

      setUserToken(user.token);
      setCurrentUser(user.currentUser);
      setIsAuthenticated(user.loggedIn);

      return user;
    } catch (err) {
      clearUserToken();
      setIsAuthenticated(false);
    }
  }

  return (
    <Routes>
      <Route path='/register' element={<Register signUp={registerUser} />}></Route>
      <Route path='/login' element={<Login logIn={loginUser} />}></Route>
      <Route path='/' element={<Home />}></Route>
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
