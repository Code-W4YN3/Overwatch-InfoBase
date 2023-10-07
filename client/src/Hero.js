import { useState,useEffect } from "react"


function Hero({ id }){
    const [ hero, setHero] = useState([])

    useEffect(()=>{
        fetch(`/heroes/${id}`)
        .then((res)=> res.json())
        .then(data => {
          setHero(data)
        })
    }, [id])


    return(
    <>
      <img alt="hero Header" src={hero.image} style={{ height: "100%"}}/>
      <div id="heroData">
        <h2 style={{ fontSize: "220%" , marginBottom: "0", color: "azure"}}>{hero.name}</h2>
        {/* <div className="abilityInfoDiv">
          <div className="abilityIconsDiv" ><img className="abilityIcons" src={} /></div>
          <p className="abilityInfo">{}</p>
        </div> */}
        <h3 style={{ fontSize: "180%" , marginTop: "0", color: "rgb(255, 187, 60)"}}>Abilities</h3>
        
          <div className="abilityIconsDiv" style={{position: "absolute", left: "0%", top: "22%"}}><img className="abilityIcons" alt={hero.ability1} src={hero.ability1_icon} /></div>
          <p className="abilityInfo" style={{position: "absolute", left: "9%", top: "21%"}}>{hero.ability1}</p>
        
          <div className="abilityIconsDiv" style={{position: "absolute", left: "0%", top: "38%"}}><img className="abilityIcons" alt={hero.ability2} src={hero.ability2_icon} /></div>
          <p className="abilityInfo" style={{position: "absolute", left: "9%", top: "37%"}}>{hero.ability2}</p>
        
          <div className="abilityIconsDiv" style={{position: "absolute", left: "0%", top: "54%"}}><img className="abilityIcons" alt={hero.ability3} src={hero.ability3_icon} /></div>
          <p className="abilityInfo" style={{position: "absolute", left: "9%", top: "53%"}}>{hero.ability3}</p>
        
          <div className="abilityIconsDiv" style={{position: "absolute", left: "0%", top: "70%"}}><img className="abilityIcons" alt={hero.ability4} src={hero.ability4_icon} /></div>
          <p className="abilityInfo" style={{position: "absolute", left: "9%", top: "69%"}}>{hero.ability4}</p>
        
          <div className="ultimateIconsDiv" style={{position: "absolute", left: "-1%", top: "87%"}}><img className="ultimateIcons" alt={hero.ultimate_ability} src={hero.ultimate_icon} /></div>
          <p className="ultimateInfo" style={{position: "absolute", left: "11%", top: "87%"}}>{hero.ultimate_ability}</p>
        
      </div>
    </>
    )
}

export default Hero