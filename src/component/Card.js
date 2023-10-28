import React from 'react'

export const Card = ({ projectImage, title, descrip, linkGit, linkPage }) => {
    return (
        <>
            <div className="mt-5 mb-5 boxShad ms-5 rounded-4" style={{ marginTop: '10vh', width: '100%', padding: '4rem'}}>
                <div className='boxCon rounded-5' style={{ right: '-1.5%', width: '101.5%' }} />
                <div className="row">
                    <div className="col-md-7">
                        <img src={projectImage} alt="" className='card-img-top rounded-3' style={{height: '25vw'}}/>
                    </div>
                    <div className="col-md-5 d-flex flex-column justify-content-center mt-5">
                        <h3 className="card-title fw-bold fs-1">{title}</h3>
                        <p className="card-text mt-4 fs-4">{descrip}</p>
                        <div className='d-flex mt-4 fs-1'>
                            <a href={linkGit} className='me-4'><i className="fa-brands fa-github"></i></a>
                            <a href={linkPage}><i className="fa-regular fa-window-maximize"></i></a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
