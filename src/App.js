import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const isLogged = useSelector(state => state.loggedReducer);
  return (
    <>
      { console.log(isLogged) }
      { isLogged ? <Home /> : <Login />}
    </>
  );
}

export default App;
