import React from 'react'
import { Link } from 'react-router-dom';
import { useTransition, animated, config } from 'react-spring';

export const NavMenu = ({toggleMenu, isOpen}) => {

    const textTransitions = useTransition(isOpen, {
        from: { transform: 'translateY(20px)', opacity: 0 },
        enter: { transform: 'translateY(0)', opacity: 1 },
        leave: { transform: 'translateY(20px)', opacity: 0 },
        
    });
  return (
    <div className='d-flex justify-content-center p-5'>  
        <ul className="list-unstyled">
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
                                            <Link to="/" style={{textDecoration: 'none', color: 'white'}} onClick={()=> toggleMenu(isOpen)}>Home</Link>
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
                                            <Link to="/skills" style={{textDecoration: 'none', color: 'white'}} onClick={()=> toggleMenu(isOpen)}>Skills</Link>
                                            
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
    </div>
  )
}
