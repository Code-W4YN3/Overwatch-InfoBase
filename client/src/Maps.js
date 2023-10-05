import { useState,useEffect } from "react"


function Maps(){
    const [ maps, setMaps ] = useState([]) 
    const [ modes, setModes ] = useState([]) 

    useEffect(()=>{
        fetch('/maps')
        .then((res)=> res.json())
        .then(data => {
          setMaps(data)
        })
        fetch('/gamemodes')
        .then((res)=> res.json())
        .then(data => {
          setModes(data)
        })
    },[])


    return(
        <>
        <img style={{height: "450px", width: "100%"}} id="apsHeader" alt="Maps Header" src="https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt63df614431a3f554/62fc2d9ead1dcd16f35de8e9/Kanezaka_Team_Deathmatch.jpg"/>
        <h1 style={{position: "absolute", top: "50%" ,left: "44%", color: "white", fontSize: "300%"}}>Maps</h1>
        <div id="mapsBody">
            <p>Travel the world and fight for the future in diverse locations around the globe. From the technological marvels of Busan to the snow-dusted streets of Toronto, every map has objectives to accomplish, secrets to uncover, and strategies to explore. </p>
            {modes.map((mode)=>(
                <div style={{ width: "100%", textAlign: "center"}}>
                    <h3>{mode.name} Game Mode</h3>
                    <div style={{ width: "100%"}}>
                        {mode.maps.map((map)=>(
                            <div className="mapDivs">
                                <img src={map.image} style={{ width: "100%"}}/>
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