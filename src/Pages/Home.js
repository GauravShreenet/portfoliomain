import { useEffect, useRef, useState } from "react"
import imagePortfolio from "../asset/1.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { Transition } from "../component/Transition";
import { RevealAni } from "../component/RevealAni";
import cvFile from "../asset/GauravResume.pdf"
import { CircularText } from "../component/CircularText";

export const Home = () => {
    const targetRef = useRef(null);
    // const targetRef2 = useRef(null);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const commonMarTop = windowWidth <= 990 ? '10vh' : '100vh';
    const commonPad = windowWidth <= 990 ? '50vh' : '0vh';


    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    // const opacity1 = useTransform(scrollYProgress, [1, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    return (
        <>
            <Transition />
            <div className="container-md position-relative" id='home'>

                <motion.div ref={targetRef} className={windowWidth <= 990 ? "row mt-5 pt-5 position-relative z-0" : "row position-fixed"} style={{ opacity, scale, top: '10%', transformOrigin: 'top left', }}>
                    <div className="col-md mt-5 d-flex align-items-center justify-content-center">
                        <div className='my-5 z-3'>
                            <div className="d-flex align-items-center"><RevealAni>Hi I'm</RevealAni><RevealAni><span className='fs-1 ms-2 fw-bold'>Gaurav Shreenet</span></RevealAni></div>
                            <RevealAni><span className="tag">Front-End Dev.</span></RevealAni><br /><br />
                            <RevealAni><span className='mt-5'>React is my canvas; code is my art. I bring ideas to life, crafting inspiring user interfaces.</span></RevealAni><br /><br /> 
                            <a href={cvFile} download><button className='btn btn-primary fw-bold'>Download CV <i class="fa-solid fa-download"></i></button></a>
                        </div>
                    </div>
                    <div className="col-lg mt-5 d-flex justify-content-center align-items-center">
                        <div className="image-resize d-flex justify-content-center align-items-center">
                            <img src={imagePortfolio} alt="Portfolio" className="img-fluid" />
                        </div>
                    </div>
                    <div className="d-none d-md-flex position-relative">
                        <div className="circle">
                            <CircularText />
                        </div>
                    </div>
                </motion.div>

                <div style={{ marginTop: commonMarTop }}>
                    <div style={{ height: '100vh', width: '100%' }}>
                        <div className="overflow-hidden" style={{ position: 'sticky', top: '40vh' }}>
                            <div className="text-center display-5" style={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
                                Transforming ideas into interactive web experiences.
                            </div>
                        </div>
                        <div style={{ marginTop: '28vh', overflow: 'hidden', position: 'sticky', top: '40vh', paddingTop: commonPad, background: 'var(--body-bg)' }}>
                            <div className='contact'>
                                GET IN
                            </div>
                            <div className='contact display-5'>
                                TOUCH
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5" id="contact">
                    <div className="col d-flex justify-content-center" >
                    </div>
                    <div className="z-2">
                        <form action="https://formsubmit.co/5403d28636684ff0d5b8d7fe9cc9d574" method="POST" className='d-flex justify-content-center' style={{ marginTop: '25vh' }}>
                            <div className='w-75'>
                                <div className="mb-3 mt-5">
                                    <input type="text" className='form-control fs-3 bg-transparent text-white rounded-bottom-0' placeholder='Your Name' name='name' />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control fs-3 bg-transparent text-white rounded-bottom-0" name="email" placeholder="Your Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className='form-control fs-3 bg-transparent text-white rounded-bottom-0' placeholder='Subject' name='subject' />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control fs-3 bg-transparent text-white rounded-bottom-0" name="message" rows="4" placeholder='Your Message' style={{ resize: 'none' }}></textarea>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button type="submit" className="btn btn-primary fw-bold mt-5">Send Message <i className="fa-solid fa-paper-plane"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>

    )
}
