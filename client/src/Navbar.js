import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <>
        <div id='navBar'>
            <div className="navContainers">
                <Link className='navButtons' to={'/'}> Home </Link>
                <Link className='navButtons' to={'/heroes'}> Heroes </Link>
                <Link className='navButtons' to={'/maps'}> Maps </Link>
                <Link className='navButtons' to={'/guides'}> Guides </Link>
                <Link className='navButtons' to={'/signup'}> Sign Up </Link>
              
            </div>
        </div>
        </>

    )

}
export default NavBar;