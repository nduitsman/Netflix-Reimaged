import './App.css'
import Home from './pages/Home';
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
  );
}

export default App;
