import { Spin as Hamburger } from 'hamburger-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useTransition, animated, config } from 'react-spring';

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuTransitions = useTransition(isOpen, {
        from: { height: '0', opacity: 0 },
        enter: { height: '100vh', opacity: 1 },
        leave: { height: '0', opacity: 0 },
        
    });

    const textTransitions = useTransition(isOpen, {
        from: { transform: 'translateY(20px)', opacity: 0 },
        enter: { transform: 'translateY(0)', opacity: 1 },
        leave: { transform: 'translateY(20px)', opacity: 0 },
        
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col"  style={{zIndex: '999'}}>
                    <h1 className='logo'>Logo</h1>
                </div>
                <div className="col d-flex justify-content-end">
                    <Hamburger color='rgb(255 255 255)' toggled={isOpen} size="40" rounded toggle={toggleMenu} />
                </div>
            </div>
            {menuTransitions(
                (menuStyles, item) => item && (
                    <animated.div className="menu md p-5" style={{ ...menuStyles }}>
                        <ul className="list-unstyled text-center p-5">
                            <li>
                                {textTransitions(
                                    (textStyles, item) => item && (
                                        <animated.div
                                            style={{
                                                ...textStyles,
                                                cursor: 'pointer',
                                            }}
                                            className='mt-2'
                                        >
                                            Home
                                        </animated.div>
                                    )
                                )}
                            </li>
                            <li>
                                {textTransitions(
                                    (textStyles, item) => item && (
                                        <animated.div
                                            style={{
                                                ...textStyles,
                                                cursor: 'pointer',
                                            }}
                                            className='mt-2'
                                        >
                                            Skills
                                        </animated.div>
                                    )
                                )}
                            </li>
                            <li>
                                {textTransitions(
                                    (textStyles, item) => item && (
                                        <animated.div
                                            style={{
                                                ...textStyles,
                                                cursor: 'pointer',
                                            }}
                                            className='mt-2'
                                        >
                                            Projects
                                        </animated.div>
                                    )
                                )}
                            </li>
                            <li>
                                {textTransitions(
                                    (textStyles, item) => item && (
                                        <animated.div
                                            style={{
                                                ...textStyles,
                                                cursor: 'pointer',
                                            }}
                                            className='mt-2'
                                        >
                                            About
                                        </animated.div>
                                    )
                                )}
                            </li>
                            <li>
                                {textTransitions(
                                    (textStyles, item) => item && (
                                        <animated.div
                                            style={{
                                                ...textStyles,
                                                cursor: 'pointer',
                                            }}
                                            className='mt-2'
                                        >
                                            Contact
                                        </animated.div>
                                    )
                                )}
                            </li>
                        </ul>
                    </animated.div>
                )
            )}
        </div>
    )
}
