import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react"
import Home from './Home';
import NavBar from './Navbar';
import Heroes from './Heroes';
import Hero from './Hero';

function App() {
  const [ heroID, setHeroID ] = useState(1)
  const [ heroName, setHeroName ] = useState('D.va')
  
  function handleChange(no, name){
    setHeroID(no)
    setHeroName(name)
    
  }

  console.log(`${heroID} ${heroName}`)

  let urlPath = `/heroes/${heroName}`

  return (
    <>
      <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/heroes' element={<Heroes onChange={handleChange} urlPath={urlPath}/>}/>
          <Route path='/heroes/D.va' element={<Hero id={1}/>} />
          <Route path='/heroes/Doomfist' element={<Hero id={2}/>} />
          <Route path='/heroes/Junker Queen' element={<Hero id={3}/>} />
          <Route path='/heroes/Orisa' element={<Hero id={4}/>} />
          <Route path='/heroes/Ramattra' element={<Hero id={5}/>} />
          <Route path='/heroes/Reinhardt' element={<Hero id={6}/>} />
          <Route path='/heroes/Roadhog' element={<Hero id={7}/>} />
          <Route path='/heroes/Sigma' element={<Hero id={8}/>} />
          <Route path='/heroes/Winston' element={<Hero id={9}/>} />
          <Route path='/heroes/Wrecking Ball' element={<Hero id={10}/>} />
          <Route path='/heroes/Zarya' element={<Hero id={11}/>} />
          <Route path='/heroes/Ashe' element={<Hero id={12}/>} />
          <Route path='/heroes/Bastion' element={<Hero id={13}/>} />
          <Route path='/heroes/Cassidy' element={<Hero id={14}/>} />
          <Route path='/heroes/Echo' element={<Hero id={15}/>} />
          <Route path='/heroes/Genji' element={<Hero id={16}/>} />
          <Route path='/heroes/Hanzo' element={<Hero id={17}/>} />
          <Route path='/heroes/Junkrat' element={<Hero id={18}/>} />
          <Route path='/heroes/Mei' element={<Hero id={19}/>} />
          <Route path='/heroes/Pharah' element={<Hero id={20}/>} />
          <Route path='/heroes/Reaper' element={<Hero id={21}/>} />
          <Route path='/heroes/Sojourn' element={<Hero id={22}/>} />
          <Route path='/heroes/Soldier: 76' element={<Hero id={23}/>} />
          <Route path='/heroes/Sombra' element={<Hero id={24}/>} />
          <Route path='/heroes/Symmetra' element={<Hero id={25}/>} />
          <Route path='/heroes/Torbjorn' element={<Hero id={26}/>} />
          <Route path='/heroes/Tracer' element={<Hero id={27}/>} />
          <Route path='/heroes/Widowmaker' element={<Hero id={28}/>} />
          <Route path='/heroes/Ana' element={<Hero id={29}/>} />
          <Route path='/heroes/Baptiste' element={<Hero id={30}/>} />
          <Route path='/heroes/Brigitte' element={<Hero id={31}/>} />
          <Route path='/heroes/Illari' element={<Hero id={32}/>} />
          <Route path='/heroes/Kiriko' element={<Hero id={33}/>} />
          <Route path='/heroes/Lifeweaver' element={<Hero id={34}/>} />
          <Route path='/heroes/Lucio' element={<Hero id={35}/>} />
          <Route path='/heroes/Mercy' element={<Hero id={36}/>} />
          <Route path='/heroes/Moira' element={<Hero id={37}/>} />
          <Route path='/heroes/Zenyatta' element={<Hero id={38}/>} />

      </Routes>
    </>
  );
}

export default App;
