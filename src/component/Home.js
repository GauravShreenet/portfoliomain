import React from 'react'
import imagePortfolio from "../asset/1.png"

export const Home = () => {
    return (
        <div className="container" id='home'>
            <div className="row">
                <div className="col-md d-flex align-items-center">
                    <div>
                        Hi I'm <span className='fs-1 fw-bold'>Gaurav Shreenet</span><br />
                        <span className="tag">Jr. Front-End Dev.</span><br /><br />
                        <span className='mt-5'>React is my canvas; code is my art. I bring ideas to life, crafting inspiring user interfaces.</span>
                    </div>
                </div>
                <div className="col-md mt-5">
                    <div className="image-resize d-flex justify-content-center align-items-center">
                        <img src={imagePortfolio} alt="Portfolio Image" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md text-center" style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
                    Transforming ideas into interactive web experiences.
                </div>
            </div>

            <div className="row mt-5">
                <div className="col d-flex justify-content-center">
                    <span className="contact">
                        Get In Touch
                    </span>
                </div>
                <form className='mb-5'>
                    <div className="mb-3 mt-5">
                        <input type="text" className='form-control fs-3 bg-transparent text-white' placeholder='Your Name' id='name' />
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control fs-3 bg-transparent text-white" id="email" placeholder="Your Email" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className='form-control fs-3 bg-transparent text-white' placeholder='Subject' id='subject' />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control fs-3 bg-transparent text-white" id="textarea" rows="3" placeholder='Your Message'></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button type="submit" className="btn btn-primary fw-bold">Send Message <i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                </form>

            </div>

        </div>
    )
}
