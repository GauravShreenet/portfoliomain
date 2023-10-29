import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'


export const RevealAni = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(()=>{
        if(isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }  
    }, [isInView]);
    
  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block', overflow: 'hidden'}}>
        <motion.div 
        variants={{
            hidden: { opacity: 0, y:75},
            visible: { opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.75}}
        >
            {children}
        </motion.div>
        <motion.div className='bg-primary'
            variants={{
                hidden: { left: 0 },
                visible: { left: "100%" },
            }}
            initial='hidden'
            animate={slideControls}
            transition={{delay: 0.5, delayduration: 0.5, ease: "easeIn" }}
            style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                zIndex: 20,
            }}
        />
    </div>
  )
}
