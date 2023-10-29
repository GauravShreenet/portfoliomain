import { useRef } from "react"
import imagePortfolio from "../asset/1.png"
import { motion, useScroll, useTransform } from "framer-motion"

export const Home = () => {
    const targetRef = useRef(null);
    // const targetRef2 = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    // const opacity1 = useTransform(scrollYProgress, [1, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <div className="container-md position-relative" id='home'>
            <motion.div ref={targetRef} className="row position-fixed" style={{ opacity, scale, top: '10%'}}>
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

            <div style={{ marginTop: '100vh', background: 'green' }}>
                <div style={{ height: '150vh', width: '100%' }}>
                    <div className="overflow-hidden" style={{ position: 'sticky', top: '40vh' }}>
                        <div className="text-center bg-success" style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
                            Transforming ideas into interactive web experiences.
                        </div>
                        <div>
                        <div className='contact'>
                            GET IN
                        </div>
                        <div className='contact'>
                            TOUCH
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5" id="contact">
                <div className="col d-flex justify-content-center" style={{ marginTop: '100vh' }}>
                    

                </div>
                <div className="z-2">
                    <form className='d-flex justify-content-center' style={{marginTop: '25vh'}}>
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
                
            </div>
        </div>
    )
}
