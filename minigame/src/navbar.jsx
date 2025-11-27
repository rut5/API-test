import {Link} from 'react-router-dom';

function Navbar() {

    return(
        <>
            <nav>
                <ul>
                    <li className="navbar"><Link to="/" className="navbar">Home</Link></li>
                </ul>
            </nav>
        
        </>
    )

}

export default Navbar;