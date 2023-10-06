import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";


function NavBar({ onLogout, user }) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    if(user){
    return (
        <>
        <div id='navBar'>
            <div className="navContainers">
                <Link className='navButtons' to={'/'}> Home </Link>
                <Link className='navButtons' to={'/heroes'}> Heroes </Link>
                <Link className='navButtons' to={'/maps'}> Maps </Link>
                <Link className='navButtons' to={'/guides'}> Guides </Link>
                <Link className='navButtons' to={'/user'}> Account </Link>
                <a href='/'><button onClick={handleLogout}>Logout</button></a>
              
            </div>
        </div>
        </>

    )}else{
        return(
            <>
        <div id='navBar'>
            <div className="navContainers">
                <Link className='navButtons' to={'/'}> Home </Link>
                <Link className='navButtons' to={'/heroes'}> Heroes </Link>
                <Link className='navButtons' to={'/maps'}> Maps </Link>
                <Link className='navButtons' to={'/guides'}> Guides </Link>
                <Link className='navButtons' to={'/user'}> Account </Link>
                <Link className='navButtons' to={'/signup'}> Sign Up </Link>
                <Link className='navButtons' to={'/signin'}> Sign In </Link>
              
            </div>
        </div>
        </>
        )
    }

}
export default NavBar;