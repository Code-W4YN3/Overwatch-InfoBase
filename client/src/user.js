import { useState,useEffect } from "react"

function User({ user }){
    const [userId, setUserId] = useState(user?.username)
    const [ userSaves, setUserSaves] = useState([])

    useEffect(()=>{
        fetch('/saves')
        .then((res)=> res.json())
        .then((data) => {
          setUserSaves(data)
        })
    },[])
    

    return(
        <>
            <img style={{position: "fixed"}} src="https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt912826400bb9b504/6308459c47fdc2115dced822/cloud-2600.jpg?format=webply&quality=90"/>
            <div id="userBody">
            <h1 style={{paddingTop: "15%", color: "white", marginLeft: "2%", fontSize: "250%", marginBottom: '0%'}}>Hello @{user?.username}!</h1>
            <div style={{ width: "100%"}}>
            <h3 id="saved" style={{marginLeft: "10%"}}>Saved Articles:</h3>
            {userSaves.filter(user => user.username === userId).map((guide)=>(
                <div className="guideDiv">
                    <a href={guide.url}><img alt="guide link" className='guideImage' src={guide.image}/></a>
                    <span style={{ display: "flex", marginLeft: "10%"}}><h3>{guide.name}</h3></span>
                </div>      
            ))}
            </div>
            </div>
        </>
    )
}

export default User