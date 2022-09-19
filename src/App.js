import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

function App() {
  const isLogged = useSelector(state => state.loggedReducer);
  return (
    <>
      { isLogged ? <Home /> : <Login />}
    </>
    
    //<Routes>
    //  <Route path='/' element={<Home />}></Route>
    //  <Route path='/login' element={<Login />}></Route>
    //</Routes>
  );
}

export default App;
