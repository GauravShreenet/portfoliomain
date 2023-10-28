import React from 'react'
import { Card } from '../component/Card'

export const Project = () => {
  return (
    <>
      <title>GauravShreenet | Project</title>
      <div className="container">
        <div className="text-center" style={{ fontSize: '4rem', fontWeight: 'bold', fontFamily: 'Abril Fatface, serif', marginTop: '20vh' }}>
          Building the future, one line of code at a time.
        </div>
        <div>
          <Card />
          <div className="col mb-5 boxShad ms-5 rounded-4 d-flex justify-content-center align-items-center" style={{ marginTop: '10vh', width: '100%' }}>
            <div className='boxCon rounded-5' style={{ right: '-2%', width: '101.5%' }} />
            <div className="imageAbout d-flex justify-content-center align-items-center">

            </div>
          </div>
          <div className="row" style={{ marginBottom: '10vh' }}>
            <div className="col mb-5 boxShad ms-5 rounded-4 d-flex justify-content-center align-items-center" style={{ marginTop: '10vh' }}>
              <div className='boxCon rounded-5' style={{ right: '-2%', width: '101.5%' }} />
              <div className="imageAbout d-flex justify-content-center align-items-center">

              </div>
            </div>
            <div className="col mb-5 boxShad ms-5 rounded-4 d-flex justify-content-center align-items-center" style={{ marginTop: '10vh' }}>
              <div className='boxCon rounded-5' style={{ right: '-2%', width: '101.5%' }} />
              <div className="imageAbout d-flex justify-content-center align-items-center">

              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
