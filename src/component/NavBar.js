import { Spin as Hamburger } from 'hamburger-react'
import React, { useState } from 'react'
import { useSpring, animated, config } from 'react-spring';


export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const menuAnimation = useSpring({
        height: isOpen ? '100vh' : '0',
        opacity: isOpen ? 1 : 0,
        config: { duration: 300 },
        from: { height: '0', opacity: 0 },
    });

    const textMenuAnimation = useSpring({
        transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
        opacity: isOpen ? 1 : 0,
        config: { duration: 150 },
        delay: 300,
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
                <div className="col d-flex justify-content-end">
                    <Hamburger color='rgb(255 255 255)' toggled={isOpen} size="40" rounded toggle={toggleMenu} />
                </div>
            </div>
            <animated.div className="menu md p-5" style={{ ...menuAnimation }}>
                <ul className="list-unstyled text-center p-5">
                    <li><animated.div style={{...textMenuAnimation, cursor: isOpen ? 'pointer' : 'default' }} className='mt-2'>Home</animated.div></li>
                    <li><animated.div style={{...textMenuAnimation, cursor: isOpen ? 'pointer' : 'default'  }} className='mt-2'>Skills</animated.div></li>
                    <li><animated.div style={{...textMenuAnimation, cursor: isOpen ? 'pointer' : 'default' }} className='mt-2'>Projects</animated.div></li>
                    <li><animated.div style={{...textMenuAnimation, cursor: isOpen ? 'pointer' : 'default'  }} className='mt-2'>About</animated.div></li>
                    <li><animated.div style={{...textMenuAnimation, cursor: isOpen ? 'pointer' : 'default'  }} className='mt-2'>Contact</animated.div></li>
                </ul>  
            </animated.div>
        </div>
    )
}
