import { motion ,useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import { LiIcon } from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return (
    <li ref={ref} className='mb-5 d-flex flex-column align-items-center justify-content-between'>
        
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type: "spring"}}
        >
            <h5 className='fw-bold text-capitalize'>
                {type}
            </h5>
            <span className='text-capitalize'>
                {time} | {place}
            </span>
            <p>
                {info}
            </p>
        </motion.div>
    </li>
    )
}

export const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="container my-5" style={{paddingBottom: '15rem'}}>
            <div className="row">
                <div className="col text-center">
                    <h1 className='fw-bolder'>Education</h1>
                </div>
            </div>
            <div ref={ref} className='row mt-5 position-relative'>
                <div className='col-1 d-flex justify-content-center'>
                
                    <motion.div 
                    className='position-absolute top-0 bottom-0' style={{width: '4px', background: 'var(--text-color)', scaleY: scrollYProgress, transformOrigin: 'top'}} />
                </div>
                <div className="col-11">
                <ul className='d-flex flex-column align-items-start justify-content-between'>
                    <Details
                        type="Bachelor's degree, Information Technology"
                        time="Apr 2020 - Apr 2023" place="Victoria University"
                        info="Comprehensive education in IT while focusing on the skills and knowledge necessary to create web and mobile applications for a wide range of industries and platforms."
                    />

                    <Details
                        type="Bootcamp, Full stack Development"
                        time="Jul 2023 - Jan 2024" place="Dented Code Academy"
                        info="Hands-on expertise in HTML, CSS, JavaScript, and React, focusing on practical web development skills through real-world projects and immersive, industry-relevant training, making me well-prepared for front-end web development roles."
                    />
                </ul>
                </div>
            </div>

        </div>
    )
}
