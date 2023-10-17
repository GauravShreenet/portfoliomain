import React from 'react'
import imagePortfolio from "../asset/My project.png"

export const Home = () => {
  return (
    <div className="container" id='home'>
        <div className="row mt-5 p-5">
            <div className="col">
                sadasdasdas
            </div>
            <div className="col bg-danger rounded-circle">
                <div className="image-resize d-flex justify-content-center mb-5">
                    <img src={imagePortfolio} alt="" />
                </div>
            </div>
        </div>
        
    </div>
  )
}
