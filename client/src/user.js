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

    console.log(userSaves)

    return(
        <>
            <div id="userBody">
            <h1 style={{paddingTop: "15%"}}>Hello @{user?.username}!</h1>
            <div style={{ width: "100%"}}>
            <h3>Saved Articles:</h3>
            {userSaves.filter(user => user.username == userId).map((guide)=>(
                <div className="guideDiv">
                    <a href={guide.url}><img className='guideImage' src={guide.image}/></a>
                    <span style={{ display: "flex", marginLeft: "10%"}}><h3>{guide.name}</h3></span>
                </div>      
            ))}
            </div>
            </div>
        </>
    )
}

export default User