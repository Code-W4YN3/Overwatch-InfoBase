import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './Navbar';
import Heroes from './Heroes';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/heroes' element={<Heroes />}/>
      </Routes>
    </>
  );
}

export default App;
