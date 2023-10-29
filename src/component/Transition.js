import React from 'react'
import { motion } from 'framer-motion'

export const Transition = () => {
    return (
        <>
            <motion.div className="position-fixed bg-primary" style={{ top: '0%', right: '0%', left: '0%', bottom: '100%', height: '200vh', zIndex: '1200' }}
                initial={{ y: "100%", height: "100%" }}
                animate={{ y: "0%", height: "0%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            <motion.div className="position-fixed" style={{ top: '0%', right: '0%', left: '0%', bottom: '100%', height: '200vh', zIndex: '1100', background: 'var(--text-color)' }}
                initial={{ y: "100%", height: "100%" }}
                animate={{ y: "0%", height: "0%" }}
                transition={{ delay:0.1, duration: 0.8, ease: "easeInOut" }}
            />

            <motion.div className="position-fixed" style={{ top: '0%', right: '0%', left: '0%', bottom: '100%', height: '200vh', zIndex: '1000', background: '(--body-bg)' }}
                initial={{ y: "100%", height: "100%" }}
                animate={{ y: "0%", height: "0%" }}
                transition={{ delay:0.3, duration: 0.8, ease: "easeInOut" }}
            />


        </>
    )
}
