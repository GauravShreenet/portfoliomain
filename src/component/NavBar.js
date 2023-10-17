import {Spin as Hamburger} from 'hamburger-react'
import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring';


export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const menuAnimation = useSpring({
        height: isOpen ? '100vh' : '0',
        opacity: isOpen ? 1 : 0,
        config: {duration: 300},
        from: {height: '0', opacity: 0 },
    });

    const textMenuAnimation = useSpring({
        transform: isOpen ? 'translateY(0)' : 'translateY(100px)',
        opacity: isOpen ? 1 : 0,
        
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h1>Logo</h1>
                </div>
                <div className="col d-flex justify-content-center">
                    <h1><i className="fa-solid fa-house"></i></h1>
                </div>
                <div className="col d-flex justify-content-end">
                    <Hamburger color='rgb(255 255 255)' toggled={isOpen} size="40" rounded toggle={toggleMenu}/>
                </div>
            </div>
            <animated.div className="menu md mt-5 text-center p-5" style={{...menuAnimation}}>
                    <animated.div style={{...textMenuAnimation, delay: isOpen ? 0 : 300}} className='mt-5'><h1>Skills</h1></animated.div>
                    <animated.div style={{...textMenuAnimation, delay: isOpen ? 300 : 600}} className='mt-5'><h1>Projects</h1></animated.div>
                    <animated.div style={{...textMenuAnimation, delay: isOpen ? 600 : 900}} className='mt-5'><h1>About</h1></animated.div>
                    <animated.div style={{...textMenuAnimation, delay: isOpen ? 900 : 1200}} className='mt-5'><h1>Contact</h1></animated.div>
            </animated.div>
        </div>
    )
}
