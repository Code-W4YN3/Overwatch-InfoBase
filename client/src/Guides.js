import { useState,useEffect } from "react"

function Guides({ user }){
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [image, setImage] = useState('')
    const [userId, setUserId] = useState(user.username)
    const [userSaves, setUserSaves ] = useState([])
    const [ guides, setGuides ] = useState([])
    useEffect(()=>{
        fetch('/guides')
        .then((res)=> res.json())
        .then(data => {
          setGuides(data)
        })
    },[])

    const handleSubmit = (e) => {

        console.log(name)

        e.preventDefault();
        setName()
        fetch('/saves', {
           method: 'POST',
           body: JSON.stringify({
              name: name,
              url: url,
              image: image,
              username: userId,
           }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
        })
           .then((res) => res.json())
           .then(() => {
              setName('');
              setUrl('');
              setImage('')
           })
           .catch((err) => {
              console.log(err.message);
           });
     };

    return(
        <>
        <img style={{ width: "100%", height: "400px", borderBottom: "solid", borderBottomColor:"rgb(255, 187, 60)"}}  alt="Guides Header"src="https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltec463c7444135f68/641243e41839f965bff26773/2600_Lifeweaver.jpg"/> 
        <div id="guidesBody">
            <div id="guideBelt">
                <h1 id='guideTitle'>Guides</h1>
            </div>
            <p style={{ textAlign: "center", paddingTop: "5%", color: "white", fontSize: "120%"}}>Take a look at some guides below to better your skill!</p>
            {guides.map((guide)=>(
                <div className="guideDiv" onMouseOverCapture={()=>{setName(guide.name); setUrl(guide.url); setImage(guide.image);}}>
                    <a href={guide.url}><img className='guideImage' alt={guide.name} src={guide.image}/></a>
                    <span style={{ display: "flex", marginLeft: "10%"}}><h3>{guide.name}</h3><button style={{ height: "25px", marginTop: "2%", marginLeft: "2%"}} onClick={handleSubmit}>Save</button></span>
                </div>      
            ))}
        </div>
        </>
    )
}

export default Guides