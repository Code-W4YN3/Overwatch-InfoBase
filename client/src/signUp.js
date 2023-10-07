import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import './signup.css'

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name && pass){
    fetch('/users', {
       method: 'POST',
       body: JSON.stringify({
          username: name,
          password: pass,
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
       .then((res) => res.json())
       .then(() => {
          setName('');
          setPass('');
          navigate('/owsignin')
       })
       .catch((err) => {
          console.log(err.message);
       });
      }
 };

  return (
    <>
      <img alt="background" style={{width: "100%", height: "800px"}} src="https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt912826400bb9b504/6308459c47fdc2115dced822/cloud-2600.jpg?format=webply&quality=90"/>
    <div className="App">
      <h2 className="signTitle">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={pass}
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />

      <button type="submit" className="button">SignUp</button>

      </form>
      <p className="switch2" style={{color: "white"}}>Already a User? <Link className='switchButtons' to={'/owsignin'} style={{ width: "100px"}}> Sign Up </Link></p>

    </div>
    </>
  );
}

export default Signup;