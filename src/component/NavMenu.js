import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NavMenu = ({ toggleMenu, isOpen }) => {
  return (
    <div className='d-flex justify-content-center p-5 m-5'>
      <ul className="list-unstyled">
        <li className='overflow-hidden'>
          <motion.div
          variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3 }}
          className='overflow-hidden' style={{ width: "50vh"}}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }} onClick={() => toggleMenu(isOpen)}><span className='hover-slide'><i class="fa-solid fa-arrow-right-long me-3" />Home</span></Link>
          </motion.div>
        </li>
        <li className='overflow-hidden'>
          <motion.div
          variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate='visible'
          transition={{delay: 0.1, duration: 0.3 }}
          className='overflow-hidden' style={{ width: "50vh" }}>
            <Link to="/about" style={{ textDecoration: 'none', color: 'white' }} onClick={() => toggleMenu(isOpen)}><span className='hover-slide'><i class="fa-solid fa-arrow-right-long me-3" />About</span></Link>
          </motion.div>
        </li>
        <li className='overflow-hidden'>
          <motion.div
          variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate='visible'
          transition={{delay: 0.2, duration: 0.3 }} 
          className='overflow-hidden' style={{ width: "50vh" }}>
            <Link to="/project" style={{ textDecoration: 'none', color: 'white' }} onClick={() => toggleMenu(isOpen)}><span className='hover-slide'><i class="fa-solid fa-arrow-right-long me-3" />Projects</span></Link>
          </motion.div>
        </li>
        <li className='overflow-hidden'>
          <motion.div
          variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate='visible'
          transition={{delay: 0.3,  duration: 0.3 }}
          className='overflow-hidden' style={{ width: "50vh" }}>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }} onClick={() => toggleMenu(isOpen)}><span className='hover-slide'><i class="fa-solid fa-arrow-right-long me-3" />Contact</span></Link>
          </motion.div>
        </li>
      </ul>
    </div>
  )
}
