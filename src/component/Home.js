import { useRef } from "react"
import imagePortfolio from "../asset/1.png"
import { motion, useScroll, useTransform } from "framer-motion"

export const Home = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });
    
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const opacity1 = useTransform(scrollYProgress, [1, 0.5], [0, 1]);
    
    return (
        <div className="container-md position-relative" id='home'>
            <motion.div ref={targetRef} className="row position-fixed" style={{opacity, top: '10%'}}>
                <div className="col-md d-flex align-items-center">
                    <div className='m-5'>
                        Hi I'm <span className='fs-1 fw-bold'>Gaurav Shreenet</span><br />
                        <span className="tag">Jr. Front-End Dev.</span><br /><br />
                        <span className='mt-5'>React is my canvas; code is my art. I bring ideas to life, crafting inspiring user interfaces.</span><br /><br /> <br />
                        <button className='btn btn-primary fw-bold'>Download CV <i class="fa-solid fa-download"></i></button>
                    </div>
                </div>
                <div className="col-lg mt-5">
                    <div className="image-resize d-flex justify-content-center align-items-center">
                        <img src={imagePortfolio} alt="Portfolio" className="img-fluid" />
                    </div>
                </div>
            </motion.div>

            <div className="row">
                <motion.div  ref={targetRef} className="col-md text-center" style={{opacity1, fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif', marginTop: '100vh' }}>
                    Transforming ideas into interactive web experiences.
                </motion.div>
            </div>

            <div className="row mt-5">
                <div className="col d-flex justify-content-center" style={{marginTop: '100vh'}}>
                    <div>
                        <div className='contact'>
                            GET IN
                        </div>
                        <div className='contact'>
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
                            <textarea className="form-control fs-3 bg-transparent text-white rounded-bottom-0" id="textarea" rows="6" placeholder='Your Message' style={{resize: 'none'}}></textarea>
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
