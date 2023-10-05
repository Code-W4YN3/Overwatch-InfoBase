import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <>
        <div id='navBar'>
            <div className="navContainers">
                <Link className='navButtons' to={'/'}> Home </Link>
                <Link className='navButtons' to={'/heroes'}> Heroes </Link>
                <Link className='navButtons' to={'/maps'}> Maps </Link>
              
            </div>
        </div>
        </>

    )

}
export default NavBar;