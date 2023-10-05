import { useState, useEffect } from "react";
import './signup.css'

function SignIn(){
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
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
    
            <button type="submit">SignUp</button>
          </form>
        </div>
      );
    }
    
    export default SignIn;
