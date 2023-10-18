import React from 'react'
import imagePortfolio from "../asset/My project.png"

export const Home = () => {
  return (
    <div className="container" id='home'>
        <div className="row mt-5 p-5">
            <div className="col mt-5 p-5">
                Hi I'm <span className='fs-1 fw-bold'>Gaurav Shreenet</span><br />
                <span className="tag">Jr. Front-End Dev.</span><br /><br />
                <span className='mt-5'>React is my canvas; code is my art. I bring ideas to life, crafting inspiring user interfaces, one React component at a time.</span>

            </div>
            <div className="col bg-danger rounded-circle pt-3" style={{overflow: 'hidden'}}>
                <div className="image-resize d-flex justify-content-center">
                    <img src={imagePortfolio} alt="Portfolio Image" className='img-fluid' />
                </div>
            </div>
        </div>
        
    </div>
  )
}
