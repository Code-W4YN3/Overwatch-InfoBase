import { useState,useEffect } from "react"
import HeroCard from "./HeroCard"

function Heroes({ onChange, urlPath }){
    const [ heroes, setHeroes] = useState([])
    const [ roles, setRoles ] = useState([])
    

    useEffect(()=>{
        fetch('/heroes')
        .then((res)=> res.json())
        .then(data => {
          setHeroes(data)
        })
        fetch('/roles')
        .then((res)=> res.json())
        .then(data => {
          setRoles(data)
        })
    }, [])

    function handleSelect(no, hName){
        onChange(no, hName)
    }


    return(
        <>
        <header id="heroesheader">
            <img id="heroeshead" alt="heroes header" src="https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt1a58d7e31cd5fe76/632254b1f581050de0035fba/1600_Header_v2.jpg?format=webply&quality=90"/> 
            <h1 id="heroTitle">Heroes</h1>
        </header>
        <div id="heroesBody">
            <p>Overwatch features an international cast of powerful heroes with captivating personalities and backstories. Explore the full roster below.</p>
            <h2 className="roleTitles">TANK</h2>
            <span className="roleDescription">{roles[0]?.description}</span>
            <div className="heroList">
                {heroes.filter(hero => hero.role_id == 1).map((hero)=>(
                    <HeroCard hero={hero} key={hero.id} onSelect={handleSelect} urlPath={urlPath}/>
                ))}
            </div>
            <h2 className="roleTitles">DAMAGE</h2>
            <span className="roleDescription">{roles[1]?.description}</span>
            <div className="heroList">
                {heroes.filter(hero => hero.role_id == 2).map((hero)=>(
                    <HeroCard hero={hero} key={hero.id} onSelect={handleSelect} urlPath={urlPath}/>
                ))}
            </div>
            <h2 className="roleTitles">SUPPORT</h2>
            <span className="roleDescription">{roles[2]?.description}</span>
            <div className="heroList">
                {heroes.filter(hero => hero.role_id == 3).map((hero)=>(
                    <HeroCard hero={hero} key={hero.id} onSelect={handleSelect} urlPath={urlPath}/>
                ))}
            </div>
        </div>
        </>
    )
}

export default Heroes;