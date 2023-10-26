import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='position-absolute d-flex align-items-center justify-content-center py-5 px-5
            '
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            style={{ fontSize: '7rem' }}
        >
            {name}
        </motion.div>
    )
}

export const Skills = () => {
    return (
        <>
            <h1 className='fw-bold mt-5 text-center'>Skills</h1>
            <div className='position-relative d-flex align-items-center justify-content-center vh-100'>
                <motion.div className='d-flex align-items-center justify-content-center bg-success'
                    style={{ cursor: 'pointer', fontSize: '7rem' }}
                >
                    <i className="fa-solid fa-globe" whileHover={{ scale: 1.05 }}></i>
                </motion.div>

                <Skill name={<i class="fa-brands fa-html5"></i>} x="-20vw" y="2vw" />
                <Skill name={<i className='fa-brands fa-css3-alt'></i>} x="-5vw" y="-10vw" />
                <Skill name={<i class="fa-brands fa-square-js"></i>} x="20vw" y="6vw" />
                <Skill name={<i class="fa-brands fa-react"></i>} x="0vw" y="12vw" />
                <Skill name={<i class="fa-brands fa-github"></i>} x="-20vw" y="-15vw" />
            </div>
        </>
    )
}
