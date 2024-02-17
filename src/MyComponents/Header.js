import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div  className='Header'>
            
            <ul className="nav justify-content-end">
                {/* <h1>Portfolio</h1> */}
                <li >
                   <Link to = "/"> <a className="nav-link active" aria-current="page" href="#">Home</a>  </Link>
                </li>
                <li className="nav-item">
                <Link to = "/about"> <a className="nav-link" href="#">About</a></Link>
                </li>
                <li className="nav-item">
                <Link to = "/skills">  <a className="nav-link" href="#">Skills</a></Link>
                </li>
                <li className="nav-item">
                <Link to = "/education">  <a className="nav-link" href="#">Education</a></Link>
                </li>
                <li className="nav-item">
                <Link to = "/contact">  <a className="nav-link" href="#">Contact</a></Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
