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
                <img style={{width: "90px", height: "55px", marginTop: "4%"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Overwatch_2_logo.svg/2560px-Overwatch_2_logo.svg.png'/>
                <Link style={{ position: "absolute", top: "13%", fontSize: "150%", left: "11%"}} className='navButtons' to={'/'}> Home </Link>
                <Link style={{ position: "absolute", top: "13%", fontSize: "150%", left: "22%"}} className='navButtons' to={'/heroes'}> Heroes </Link>
                <Link style={{ position: "absolute", top: "13%", fontSize: "150%", left: "33%"}} className='navButtons' to={'/maps'}> Maps </Link>
                <Link style={{ position: "absolute", top: "13%", fontSize: "150%", left: "44%"}} className='navButtons' to={'/guides'}> Guides </Link>
                <Link style={{ position: "absolute", top: "13%", fontSize: "150%", left: "55%"}} className='navButtons' to={'/user'}> Account </Link>
                <a href='/'><button id="Logout" onClick={handleLogout} style={{ position: "absolute", top: "14%", fontSize: "150%", left: "89%"}}>Logout</button></a>
              
            </div>
        </div>
        </>

    )}else{
        return(
            <>
        <div id='navBar'>
            <div className="navContainers">
                <img style={{width: "90px", height: "55px", marginTop: "4%"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Overwatch_2_logo.svg/2560px-Overwatch_2_logo.svg.png'/>
                <Link style={{ position: "absolute", top: "13%", fontSize: "150%", left: "11%"}} className='navButtons' to={'/'}> Home </Link>
                <Link style={{ position: "absolute", top: "13%", fontSize: "150%", left: "22%"}} className='navButtons' to={'/heroes'}> Heroes </Link>
                <Link style={{ position: "absolute", top: "13%", fontSize: "150%", left: "33%"}} className='navButtons' to={'/maps'}> Maps </Link>
                <Link style={{ position: "absolute", top: "13%", fontSize: "150%", left: "44%"}} className='navButtonsDisabled' to={'/signin'}> Guides </Link>
                <Link style={{ position: "absolute", top: "13%", fontSize: "150%", left: "55%"}} className='navButtonsDisabled' to={'/signin'}> Account </Link>
                <Link className='navButtons' to={'/signin'} style={{ position: "absolute", top: "14%", fontSize: "150%", left: "89%"}}> Sign In </Link>
              
            </div>
        </div>
        </>
        )
    }

}
export default NavBar;