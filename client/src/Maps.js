import { useState,useEffect } from "react"
import { Link } from 'react-router-dom';



function Maps(){
    const [ modes, setModes ] = useState([]) 

    useEffect(()=>{
        fetch('/gamemodes')
        .then((res)=> res.json())
        .then(data => {
          setModes(data)
        })
    },[])


    return(
        <>
        <img id="mapsHeader" alt="Maps Header" src="https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt63df614431a3f554/62fc2d9ead1dcd16f35de8e9/Kanezaka_Team_Deathmatch.jpg"/>
        <div id="mapBelt">
            <h1 id="mapTitle">Maps</h1>
        </div>
        <div id="mapsBody">
            <p style={{ paddingTop: "6%", textAlign: "center", width: "80%", marginLeft: "10%", color: "white", fontSize: "140%"}}>Travel the world and fight for the future in diverse locations around the globe. From the technological marvels of Busan to the snow-dusted streets of Toronto, every map has objectives to accomplish, secrets to uncover, and strategies to explore. </p>
            {modes.map((mode)=>(
                <div style={{ width: "100%", textAlign: "center"}}>
                    
                    <div className="mapContainers">
                    <h3 className="modeTitle">{mode.name} Game Mode</h3>
                    <p className="modeDescription">{mode.description}</p>
                    <h3 className="modeMapTitle">{mode.name} Maps:</h3>
                        {mode.maps.map((map)=>(
                            <div className="mapDivs">
                                <a href={map.image}><img alt={map.name} src={map.image} style={{ width: "100%"}}/></a>
                                <div>
                                    <p>{map.name}, {map.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            ))}


        
        
        
        </div>
        </>
    )
}
export default Maps