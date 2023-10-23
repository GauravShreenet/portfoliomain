import React, { useEffect, useState } from 'react'
import imagePortfolio from "../asset/1.png"

export const Home = () => {

    const[textMove, setTextMove] = useState(0);
       
    return (
        <div className="container" id='home'>
            <div className="row">
                <div className="col-md d-flex align-items-center">
                    <div className='m-5'>
                        Hi I'm <span className='fs-1 fw-bold'>Gaurav Shreenet</span><br />
                        <span className="tag">Jr. Front-End Dev.</span><br /><br />
                        <span className='mt-5'>React is my canvas; code is my art. I bring ideas to life, crafting inspiring user interfaces.</span><br /><br /> <br />
                        <button className='btn btn-primary fw-bold'>Download CV <i class="fa-solid fa-download"></i></button>
                    </div>
                </div>
                <div className="col-md mt-5">
                    <div className="image-resize d-flex justify-content-center align-items-center">
                        <img src={imagePortfolio} alt="Portfolio Image" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="row my-5 py-5">
                <div className="col-md text-center" style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
                    Transforming ideas into interactive web experiences.
                </div>
            </div>

            <div className="row mt-5">
                <div className="col d-flex justify-content-center">
                    <div>
                        <div className='contact get'>
                            GET IN
                        </div>
                        <div className='contact touch'>
                            TOUCH
                        </div>
                    </div>

                </div>
                <form className='d-flex justify-content-center my-5 py-5'>
                    <div className='w-75'>
                        <div className="mb-3 mt-5">
                            <input type="text" className='form-control fs-3 bg-transparent text-white rounded-bottom-0' placeholder='Your Name' id='name' />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control fs-3 bg-transparent text-white rounded-bottom-0" id="email" placeholder="Your Email" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className='form-control fs-3 bg-transparent text-white rounded-bottom-0' placeholder='Subject' id='subject' />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control fs-3 bg-transparent text-white rounded-bottom-0" id="textarea" rows="3" placeholder='Your Message'></textarea>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button type="submit" className="btn btn-primary fw-bold">Send Message <i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </div>

                </form>

            </div>

        </div>
    )
}
