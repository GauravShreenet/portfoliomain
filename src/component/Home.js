import React from 'react'
import imagePortfolio from "../asset/My project.png"

export const Home = () => {
    return (
        <div className="container" id='home'>
            <div className="row mt-5 p-5">
                <div className="col mt-5 p-5">
                    Hi I'm <span className='fs-1 fw-bold'>Gaurav Shreenet</span><br />
                    <span className="tag">Jr. Front-End Dev.</span><br /><br />
                    <span className='mt-5'>React is my canvas; code is my art. I bring ideas to life, crafting inspiring user interfaces.</span>

                </div>
                <div className="col bg-danger rounded-circle pt-3" style={{ overflow: 'hidden' }}>
                    <div className="image-resize d-flex justify-content-center">
                        <img src={imagePortfolio} alt="Portfolio Image" className='img-fluid' />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col" style={{fontSize: '5rem', fontWeight: 'bold'}}>
                Transforming ideas into interactive web experiences, one component at a time.
                </div>
            </div>

            <div className="row mt-5">
                <div className="col">
                    <span className="contact">
                        Get In Touch
                    </span>
                    <form className='mb-5'>
                        <div class="mb-3 mt-5">
                            <input type="text" className='form-control' placeholder='Your Name' id='name' />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="email" placeholder="Your Email" />
                        </div>
                        <div class="mb-3">
                            <input type="text" className='form-control' placeholder='Subject' id='subject' />
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" id="textarea" rows="3" placeholder='Your Message'></textarea>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button type="submit" class="btn btn-primary">Send Message <i class="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
