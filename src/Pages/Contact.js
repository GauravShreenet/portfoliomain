import React from 'react'
import { Transition } from '../component/Transition'
import { RevealAni } from '../component/RevealAni'

export const Contact = () => {
    return (
        <>
            <Transition />
            <div className="container z-2" style={{ marginTop: '30vh' }}>
                <h3 className='fs-1' style={{ fontFamily: 'Abril Fatface, serif', marginTop: '20vh' }}>
                    <RevealAni>Have something in mind? Say hello! Whether it's a question, feedback, or an opportunity, I'm just an email away.</RevealAni>
                </h3>
                <form className='d-flex justify-content-center' style={{ marginTop: '15vh' }}>
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
                            <textarea className="form-control fs-3 bg-transparent text-white rounded-bottom-0" id="textarea" rows="4" placeholder='Your Message' style={{ resize: 'none' }}></textarea>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button type="submit" className="btn btn-primary fw-bold mt-5">Send Message <i className="fa-solid fa-paper-plane"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}
