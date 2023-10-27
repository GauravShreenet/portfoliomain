import React from 'react'
import { Link } from 'react-router-dom';

export const NavMenu = ({toggleMenu, isOpen}) => {
  return (
    <div className='d-flex justify-content-center p-5'>  
        <ul className="list-unstyled">
                            <li>
                                <Link to="/" style={{textDecoration: 'none', color: 'white'}} onClick={()=> toggleMenu(isOpen)}>Home</Link>
                            </li>
                            <li>
                            <Link to="/about" style={{textDecoration: 'none', color: 'white'}} onClick={()=> toggleMenu(isOpen)}>About</Link>
                            </li>
                            <li>
                            <Link to="/project" style={{textDecoration: 'none', color: 'white'}} onClick={()=> toggleMenu(isOpen)}>Projects</Link>   
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
    </div>
  )
}
