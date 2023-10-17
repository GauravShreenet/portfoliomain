import React from 'react'
import imagePortfolio from "../asset/My project.png"

export const Home = () => {
  return (
    <div className="container" id='home'>
        <div className="row mt-5 p-5">
            <div className="col">
                sadasdasdas
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
