import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import './signup.css'

function SignIn({ onLogin}){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            username: name, 
            passwird: pass }),
        })
          .then((r) => r.json())
          .then((user) => onLogin(user));
        navigate('/')
      }

    return (
      <>
        <img alt="background" style={{width: "100%", height: "800px"}} src="https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt912826400bb9b504/6308459c47fdc2115dced822/cloud-2600.jpg?format=webply&quality=90"/>
        <div className="App">
          <h2 className="signTitle">Sign In</h2>
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
    
          <button type="submit" className="button">Sign In</button>
          </form>

          <p className="switch" style={{color: "white"}}>New User? <Link className='switchButtons' to={'/signup'} style={{ width: "100px"}}> Sign Up </Link></p>
        </div>
      </>
      );
    }
    
    export default SignIn;
