import React, { useEffect, useRef } from 'react'
import { Experience } from '../component/Experience'
import { Education } from '../component/Education'
import image from "../asset/aboutPic.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { Skills } from '../component/Skills'
import { Transition } from '../component/Transition'
import { RevealAni } from '../component/RevealAni'

const AnimatedNum = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

export const About = () => {
  return (
    <>
      <Transition />
      <div className="container pb-5">
        <div className="text-center" style={{ fontSize: '4rem', fontWeight: 'bold', fontFamily: 'Abril Fatface, serif', marginTop: '20vh' }}>
          <RevealAni>Journey in Web Development</RevealAni>
        </div>
        <div className="row my-5">
          <div className="col-md">
            <RevealAni><h4 className='text-uppercase fw-bold'>biography</h4></RevealAni>
            <RevealAni><p className='mt-3'>
              I'm Gaurav Shreenet, a web developer passionate about technology. My journey began in college when I discovered the excitement of creating captivating websites.
            </p></RevealAni>
            <RevealAni><p>
              With a Bachelor's degree in Information Technology, focusing on Web and Mobile Application Development, I gained a strong foundation in web development, mastering HTML, CSS, JavaScript, and React.
              I'm committed to continuous learning in the ever-evolving tech world, staying up-to-date with the latest trends.
            </p></RevealAni>
            <RevealAni><p>
              My experience includes diverse projects, from beautiful websites to dynamic web applications, enhancing my problem-solving skills.
              Collaboration is essential to my work; I value teamwork and diverse perspectives that create outstanding digital experiences.
            </p></RevealAni>
            <RevealAni><p>
              I'm eager to connect with tech enthusiasts and potential collaborators to explore the limitless possibilities of web development.
            </p></RevealAni>
          </div>
          <div className='col-md d-flex justify-content-center align-items-center'>
            <div className="mb-5 boxShad rounded-4 d-flex justify-content-center align-items-center">
              <div className='boxCon rounded-5' />
              <div className="imageAbout d-flex justify-content-center align-items-center">
                <img src={image} alt="Gaurav" className='rounded-4' />
              </div>
            </div>
          </div>
          <div className="col-md d-flex flex-lg-column align-items-end justify-content-between">
            <div className='d-flex my-3 flex-column align-items-end justify-content-center'>
              <RevealAni><span className='fs-1 fw-bold'>
                IT
              </span></RevealAni>
              <RevealAni><h3>Graduate</h3></RevealAni>
            </div>

            <div className='d-flex my-3 flex-column align-items-end justify-content-center'>
              <span className='fs-1 fw-bold'>
                <AnimatedNum value={10} />+
              </span>
              <RevealAni><h3>Projects</h3></RevealAni>
            </div>

            <div className='d-flex my-3 flex-column align-items-end justify-content-center'>
              <span className='fs-1 fw-bold'>
                <AnimatedNum value={2} />
              </span>
              <RevealAni><h3>Years</h3></RevealAni>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </div>


    </>


  )
}
