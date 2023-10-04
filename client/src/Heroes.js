import { useState,useEffect } from "react"
import HeroCard from "./HeroCard"

function Heroes(){
    const [ heroes, setHeroes] = useState([])

    useEffect(()=>{
        fetch('/heroes')
        .then((res)=> res.json())
        .then(data => {
          setHeroes(data)
        })
      }, [])
      
    return(
        <>
        <header id="heroesheader">
            <img id="heroeshead" alt="heroes header" src="https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt1a58d7e31cd5fe76/632254b1f581050de0035fba/1600_Header_v2.jpg?format=webply&quality=90"/> 
            <h1 id="heroTitle">Heroes</h1>
        </header>
        <div id="heroesBody">
            <div id="heroesButtons">
                <button>All</button>
                <button>Tank</button>
                <button>Damage</button>
                <button>Support</button>
            </div>
            <br />
            <p>Overwatch features an international cast of powerful heroes with captivating personalities and backstories. Explore the full roster below.</p>
            <div id="heroList">
                {heroes.map((hero)=>(
                    <HeroCard hero={hero} key={hero.id}/>
                ))}
            </div>
        </div>
        </>
    )
}

export default Heroes;