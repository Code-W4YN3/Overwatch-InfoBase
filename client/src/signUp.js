import { useState, useEffect } from "react";
import './signup.css'

function Signup() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [posts, setPosts] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
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
       .then((post) => {
          setPosts((posts) => [post, ...posts]);
          setName('');
          setPass('');
       })
       .catch((err) => {
          console.log(err.message);
       });
 };

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

        <button type="submit" className="button">SignUp</button>

      </form>
    </div>
  );
}

export default Signup;