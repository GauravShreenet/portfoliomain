import React from 'react'
import { motion, useScroll } from 'framer-motion'

export const LiIcon = ({reference}) => {
  const { scrollYProgress } = useScroll(
    {
      target: reference,
      offset: ["center end", "center center"]
    }
  )

  return (
    <figure className='position-absolute' style={{left: '-1.75%'}}>
      <svg width="6vw" height="6vw" viewBox='0 0 100 100'>
        <circle cx="75" cy="50" r="20" fill='none' />
        <motion.circle cx="75" cy="50" r="20" fill="text-color" stroke="var(--text-color)" strokeWidth="5px" 
        style={{pathLength: scrollYProgress}}/>
        <circle cx="75" cy="50" r="10" fill="blue" stroke="var(--text-color)" strokeWidth="1" className='pulse-element'/>
      </svg>
    </figure>
  )
}
