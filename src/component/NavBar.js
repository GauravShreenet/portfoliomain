import { Spin as Hamburger } from 'hamburger-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useTransition, animated, config } from 'react-spring';
import { NavMenu } from './NavMenu';

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
        <div className="container p-5 position-sticky top-0">
            <div className="row z-3">
                <div className="col position-relative">
                    <h1 className='logo'>Logo</h1>
                </div>
                <div className="col position-relative d-flex justify-content-end">
                    <Hamburger color='rgb(255 255 255)' toggled={isOpen} size="40" rounded toggle={toggleMenu} />
                </div>
            </div>
            {menuTransitions(
                (menuStyles, item) => item && (
                    <animated.div className="menu md p-5 z-2" style={{ ...menuStyles }}>
                        <NavMenu  isOpen={isOpen}/>
                    </animated.div>
                )
            )}
        </div>
    )
}
