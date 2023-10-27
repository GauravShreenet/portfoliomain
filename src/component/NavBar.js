import { Spin as Hamburger } from 'hamburger-react'
import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring';
import { NavMenu } from './NavMenu';
import logo from "../asset/gs-logo.png"

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
        <div className=" m-2 p-5 position-fixed" style={{top: '1%', width: '100%'}}>
            <div className="row">
                <div className="col">
                    <div>
                        <img src={logo} alt="" style={{height: '10vh', width: '15vh'}}/>
                    </div>
                    
                </div>
                <div className="col d-flex justify-content-end">
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
