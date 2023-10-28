import React, { useEffect, useRef } from 'react'
import { Experience } from '../component/Experience'
import { Education } from '../component/Education'
import image from "../asset/aboutPic.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { Skills } from '../component/Skills'

const AnimatedNum = ({value}) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref)

  useEffect(() => {
    if(isInView){
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(()=>{
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

export const About = () => {
  return (
    <>
      <title>GauravShreenet | About</title>
      <div className="container pb-5">
        <div className="text-center" style={{ fontSize: '4rem', fontWeight: 'bold', fontFamily: 'Abril Fatface, serif', marginTop: '20vh' }}>
          Journey in Web Development
        </div>
        <div className="row my-5">
          <div className="col-4">
            <h4 className='text-uppercase fw-bold'>biography</h4>
            <p className='mt-3'>
              I'm Gaurav Shreenet, a web developer passionate about technology. My journey began in college when I discovered the excitement of creating captivating websites.
            </p>
            <p>
              With a Bachelor's degree in Information Technology, focusing on Web and Mobile Application Development, I gained a strong foundation in web development, mastering HTML, CSS, JavaScript, and React.
              I'm committed to continuous learning in the ever-evolving tech world, staying up-to-date with the latest trends.
            </p>
            <p>
              My experience includes diverse projects, from beautiful websites to dynamic web applications, enhancing my problem-solving skills.
              Collaboration is essential to my work; I value teamwork and diverse perspectives that create outstanding digital experiences.
            </p>
            <p>
              I'm eager to connect with tech enthusiasts and potential collaborators to explore the limitless possibilities of web development.
            </p>
          </div>
          <div className="col-4 mb-5 boxShad ms-5 rounded-4 d-flex justify-content-center align-items-center">
            <div className='boxCon rounded-5' />
            <div className="imageAbout d-flex justify-content-center align-items-center">
              <img src={image} alt="Gaurav" className='rounded-4' />
            </div>
          </div>
          <div className="col d-flex flex-column align-items-end justify-content-between">
            <div className='d-flex flex-column align-items-end justify-content-center'>
              <span className='fs-1 fw-bold'>
                IT
              </span>
              <h3>Graduate</h3>
            </div>

            <div className='d-flex flex-column align-items-end justify-content-center'>
              <span className='fs-1 fw-bold'>
                <AnimatedNum value={10} />+
              </span>
              <h3>Projects</h3>
            </div>

            <div className='d-flex flex-column align-items-end justify-content-center'>
              <span className='fs-1 fw-bold'>
                <AnimatedNum value={2} />
              </span>
              <h3>Years</h3>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Experience />
      <Education />

    </>


  )
}