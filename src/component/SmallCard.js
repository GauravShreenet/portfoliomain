import React from 'react'

export const SmallCard = ({ projectImage, title, linkGit, linkPage }) => {
    return (
        <>
            <div className="col-md mt-5 mb-5 boxShad ms-5 rounded-4" style={{ marginTop: '10vh', width: '100%', padding: '2rem' }}>
                <div className='boxCon rounded-5' style={{ right: '-1.5%', width: '101.5%' }} />
                <div className="col">
                    <img src={projectImage} alt="" className='card-img-top rounded-3' style={{ height: '25vw' }} />
                </div>
                <div className="col d-flex flex-column justify-content-center mt-5">
                    <h3 className="card-title fw-bold fs-1">{title}</h3>
                    <div className='d-flex justify-content-between fs-1 mt-3'>
                        <a href={linkGit} className='me-4'><i className="fa-brands fa-github"></i></a>
                        <a href={linkPage}><i className="fa-regular fa-window-maximize"></i></a>
                    </div>

                </div>
            </div>
        </>
    )
}
