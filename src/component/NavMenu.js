import React from 'react'
import { Link } from 'react-router-dom';

export const NavMenu = ({toggleMenu, isOpen}) => {
  return (
    <div className='d-flex justify-content-center p-5 m-5'>  
        <ul className="list-unstyled">
                            <li>
                              <div className='overflow-hidden' style={{width: "50vh"}}>
                              <Link to="/" style={{textDecoration: 'none', color: 'white'}} onClick={()=> toggleMenu(isOpen)}><span className='hover-slide'><i class="fa-solid fa-arrow-right-long me-3" />Home</span></Link>
                              </div>  
                            </li>
                            <li>
                            <div className='overflow-hidden' style={{width: "50vh"}}>
                            <Link to="/about" style={{textDecoration: 'none', color: 'white'}} onClick={()=> toggleMenu(isOpen)}><span className='hover-slide'><i class="fa-solid fa-arrow-right-long me-3" />About</span></Link>
                            </div>
                            </li>
                            <li>
                            <div className='overflow-hidden' style={{width: "50vh"}}>
                            <Link to="/project" style={{textDecoration: 'none', color: 'white'}} onClick={()=> toggleMenu(isOpen)}><span className='hover-slide'><i class="fa-solid fa-arrow-right-long me-3" />Projects</span></Link>   
                            </div>
                            </li>
                            <li>
                            <div className='overflow-hidden' style={{width: "50vh"}}>
                            <Link to="/contact" style={{textDecoration: 'none', color: 'white'}} onClick={()=> toggleMenu(isOpen)}><span className='hover-slide'><i class="fa-solid fa-arrow-right-long me-3" />Contact</span></Link>
                            </div>
                            </li>
                        </ul>
    </div>
  )
}
