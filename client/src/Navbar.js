import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <>
        <div id='navBar'>
            <div className="navContainers">
                <Link className='navButtons' to={'/'}> Home </Link>
            </div>
        </div>
        </>

    )

}
export default NavBar;