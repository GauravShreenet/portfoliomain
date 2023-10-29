import React from 'react'
import { motion } from 'framer-motion'

export const Transition = () => {
    return (
        <>
            <motion.div className="position-fixed bg-primary" style={{ top: '0%', right: '0%', left: '0%', width: '100%', height: '100vh', zIndex: '12000', transformOrigin: 'top'}}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.div className="position-fixed" style={{ top: '0%', right: '0%', left: '0%', width: '100%', height: '100vh', zIndex: '11999', transformOrigin: 'top', background: 'var(--body-bg)'}}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{delay: 0.2, duration: 0.5, ease: "easeInOut" }}
            />
            <motion.div className="position-fixed" style={{ top: '0%', right: '0%', left: '0%', width: '100%', height: '100vh', zIndex: '11998', transformOrigin: 'top', background: 'var(--text-color)'}}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{delay: 0.4, duration: 0.5, ease: "easeInOut" }}
            />      

        </>
    )
}
