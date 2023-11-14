import { Spin as Hamburger } from 'hamburger-react'
import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring';
import { NavMenu } from './NavMenu';
import logo from "../asset/gs-logo.png"
import { Link } from 'react-router-dom';

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuTransitions = useTransition(isOpen, {
        from: { height: '0', opacity: 0 },
        enter: { height: '100vh', opacity: 1 },
        leave: { height: '0', opacity: 0 },
        
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className=" m-2 p-3 position-fixed z-3" style={{top: '1%', width: '100%'}}>
            <div className="row z-3">
                <div className="col z-3">
                    <div>
                        <Link to="/"><img src={logo} alt="" style={{height: '10vh', width: '15vh'}}/></Link>
                    </div>
                    
                </div>
                <div className="col d-flex justify-content-end me-4">
                    <Hamburger color='rgb(255 255 255)' toggled={isOpen} size="40" rounded toggle={toggleMenu} />
                </div>
            </div>
            {menuTransitions(
                (menuStyles, item) => item && (
                    <animated.div className="menu p-5" style={{...menuStyles}}>
                        <NavMenu  toggleMenu={toggleMenu} isOpen={isOpen}/>
                    </animated.div>
                )
            )}
        </div>
    )
}
