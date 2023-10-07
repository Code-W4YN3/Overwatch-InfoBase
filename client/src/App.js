import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from './Home';
import NavBar from './Navbar';
import Heroes from './Heroes';
import Hero from './Hero';
import Maps from './Maps';
import Guides from './Guides';
import SignUp from './signUp';
import SignIn from './Login';
import User from './user';

function App() {
  const [ heroID, setHeroID ] = useState(1)
  const [ heroName, setHeroName ] = useState('D.va')
  const [user, setUser] = useState(null);


  useEffect(() => {
    fetch("/check_session").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }
  
  function handleChange(no, name){
    setHeroID(no)
    setHeroName(name)
    
  }

  console.log(`${heroID} ${heroName}`)

  let urlPath = `/owheroes/${heroName}`

  return (
    <>
      <NavBar user={user} onLogout={handleLogout}/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/owheroes' element={<Heroes onChange={handleChange} urlPath={urlPath}/>}/>
          <Route path='/owmaps' element={<Maps />} />
          <Route path='/owguides' element={<Guides user={user}/>} />
          <Route path='/owsignup' element={<SignUp />} />
          <Route path='/owsignin' element={<SignIn onLogin={handleLogin}/>} />
          <Route path='/owuser' element={<User user={user}/>} />
          <Route path='/owheroes/D.va' element={<Hero id={1}/>} />
          <Route path='/owheroes/Doomfist' element={<Hero id={2}/>} />
          <Route path='/owheroes/Junker Queen' element={<Hero id={3}/>} />
          <Route path='/owheroes/Orisa' element={<Hero id={4}/>} />
          <Route path='/owheroes/Ramattra' element={<Hero id={5}/>} />
          <Route path='/owheroes/Reinhardt' element={<Hero id={6}/>} />
          <Route path='/owheroes/Roadhog' element={<Hero id={7}/>} />
          <Route path='/owheroes/Sigma' element={<Hero id={8}/>} />
          <Route path='/owheroes/Winston' element={<Hero id={9}/>} />
          <Route path='/owheroes/Wrecking Ball' element={<Hero id={10}/>} />
          <Route path='/owheroes/Zarya' element={<Hero id={11}/>} />
          <Route path='/owheroes/Ashe' element={<Hero id={12}/>} />
          <Route path='/owheroes/Bastion' element={<Hero id={13}/>} />
          <Route path='/owheroes/Cassidy' element={<Hero id={14}/>} />
          <Route path='/owheroes/Echo' element={<Hero id={15}/>} />
          <Route path='/owheroes/Genji' element={<Hero id={16}/>} />
          <Route path='/owheroes/Hanzo' element={<Hero id={17}/>} />
          <Route path='/owheroes/Junkrat' element={<Hero id={18}/>} />
          <Route path='/owheroes/Mei' element={<Hero id={19}/>} />
          <Route path='/owheroes/Pharah' element={<Hero id={20}/>} />
          <Route path='/owheroes/Reaper' element={<Hero id={21}/>} />
          <Route path='/owheroes/Sojourn' element={<Hero id={22}/>} />
          <Route path='/owheroes/Soldier: 76' element={<Hero id={23}/>} />
          <Route path='/owheroes/Sombra' element={<Hero id={24}/>} />
          <Route path='/owheroes/Symmetra' element={<Hero id={25}/>} />
          <Route path='/owheroes/Torbjorn' element={<Hero id={26}/>} />
          <Route path='/owheroes/Tracer' element={<Hero id={27}/>} />
          <Route path='/owheroes/Widowmaker' element={<Hero id={28}/>} />
          <Route path='/owheroes/Ana' element={<Hero id={29}/>} />
          <Route path='/owheroes/Baptiste' element={<Hero id={30}/>} />
          <Route path='/owheroes/Brigitte' element={<Hero id={31}/>} />
          <Route path='/owheroes/Illari' element={<Hero id={32}/>} />
          <Route path='/owheroes/Kiriko' element={<Hero id={33}/>} />
          <Route path='/owheroes/Lifeweaver' element={<Hero id={34}/>} />
          <Route path='/owheroes/Lucio' element={<Hero id={35}/>} />
          <Route path='/owheroes/Mercy' element={<Hero id={36}/>} />
          <Route path='/owheroes/Moira' element={<Hero id={37}/>} />
          <Route path='/owheroes/Zenyatta' element={<Hero id={38}/>} />
      </Routes>
    </>
  );
}

export default App;
