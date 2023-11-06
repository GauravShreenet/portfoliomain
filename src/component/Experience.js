import { motion ,useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import { LiIcon } from './LiIcon'
import { RevealAni } from './RevealAni'

const Details = ({ postion, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
    return (
    <li ref={ref} className='mb-5 d-flex flex-column align-items-center justify-content-between'>
        
        
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type: "spring"}}
        >
            <LiIcon reference={ref}/>
            <h5 className='fw-bold text-capitalize'>{postion}&nbsp;<a href={companyLink}
                target='_blank'
                className='primary-info'
            >@{company}</a></h5>
            <span className='text-capitalize'>
                {time} | {address}
            </span>
            <p>
                {work}
            </p>
        </motion.div>
    </li>
    )
}

export const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col text-center">
                    <h1 className='fw-bolder'><RevealAni>Experience</RevealAni></h1>
                </div>
            </div>
            <div ref={ref} className='row mt-5 position-relative'>
                <div className='col d-flex justify-content-center bg-success'>
                
                    <motion.div 
                    className='position-absolute top-0 bottom-0' style={{left: '3.5rem',width: '4px', background: 'var(--text-color)', scaleY: scrollYProgress, transformOrigin: 'top'}} />
                </div>
                <div className="col-11">
                <ul className='d-flex flex-column align-items-start justify-content-between'>
                    <Details
                    
                        postion="Support Technician" company="Reliable IT Solutions"
                        companyLink="https://www.reliableitsolutions.com.au/"
                        time="May 2022 - Aug 2022" address="2A Boyle Street, Sutherland, NSW 2232"
                        work="Operating System troubleshooting. Building workstations according to the customer's needs. Software and Hardware problem-solving."
                    />

                    <Details
                        postion="Grocery Supervisor" company="The Greener Grocer"
                        companyLink=""
                        time="Apr 2023 - Present" address="Maroubra, New South Wales, Australia"
                        work="Oversees daily operations in a grocery store, managing staff, inventory, and customer service. Responsible for maintaining stock levels, ensuring a positive shopping experience, and meeting sales and budget goals while adhering to safety and regulatory standards."
                    />
                    
                </ul>
                </div>
            </div>

        </div>
    )
}
