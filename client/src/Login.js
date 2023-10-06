import { useState, useEffect } from "react";
import './signup.css'

function SignIn({ onLogin}){
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
      }

    return (
        <div className="App">
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
    
            <button type="submit">SignIn</button>
          </form>
        </div>
      );
    }
    
    export default SignIn;
