import React from 'react'
import imagePortfolio from "../asset/1.png"

export const Home = () => {
    return (
        <div className="container" id='home'>
            <div className="row">
                <div className="col d-flex align-items-center">
                    <div>
                    Hi I'm <span className='fs-1 fw-bold'>Gaurav Shreenet</span><br />
                    <span className="tag">Jr. Front-End Dev.</span><br /><br />
                    <span className='mt-5'>React is my canvas; code is my art. I bring ideas to life, crafting inspiring user interfaces.</span>
                    </div>                 
                </div>
                <div className="col mt-5">
                    <div className="image-resize d-flex justify-content-end align-items-center">
                        <img src={imagePortfolio} alt="Portfolio Image"/>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md text-center" style={{fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
                Transforming ideas into interactive web experiences.
                </div>
            </div>

            <div className="row mt-5">
                <div className="col">
                    <span className="contact">
                        Get In Touch
                    </span>
                    <form className='mb-5'>
                        <div className="mb-3 mt-5">
                            <input type="text" className='bg-transparent text-white border-start-0 border-top-0 border-end-0' placeholder='Your Name' id='name' />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="bg-transparent text-white border-start-0 border-top-0 border-end-0" id="email" placeholder="Your Email" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className='bg-transparent text-white border-start-0 border-top-0 border-end-0' placeholder='Subject' id='subject' />
                        </div>
                        <div className="mb-3">
                            <textarea className="bg-transparent text-white border-start-0 border-top-0 border-end-0" id="textarea" rows="3" placeholder='Your Message'></textarea>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button type="submit" className="btn btn-primary fw-bold">Send Message <i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
