import React from 'react'
import { Card } from '../component/Card'
import imageMovie from '../asset/movieapi.PNG'
import { SmallCard } from '../component/SmallCard'

export const Project = () => {

  const projectBig = [
    {
      image: imageMovie,
      title: "Move API",
      descrip: "Discover and save your favorite movies with ease. Search for movies and organize your selections in a way that suits your preference.",
      linkGit: "https://github.com/GauravShreenet/MovieApi",
      linkPage: "https://movie-api-taupe.vercel.app/"
    },
    {
      image: imageMovie,
      title: "Move API",
      descrip: "Discover and save your favorite movies with ease. Search for movies and organize your selections in a way that suits your preference.",
      linkGit: "https://github.com/GauravShreenet/MovieApi",
      linkPage: "https://movie-api-taupe.vercel.app/"
    },
  ]

  const projectSmall = [
    {
      image: imageMovie,
      title: "Move API",
      linkGit: "https://github.com/GauravShreenet/MovieApi",
      linkPage: "https://movie-api-taupe.vercel.app/"
    },
    {
      image: imageMovie,
      title: "Move API",
      linkGit: "https://github.com/GauravShreenet/MovieApi",
      linkPage: "https://movie-api-taupe.vercel.app/"
    },
  ]

  return (
    <>
      <title>GauravShreenet | Project</title>
      <div className="container">
        <div className="text-center" style={{ fontSize: '4rem', fontWeight: 'bold', fontFamily: 'Abril Fatface, serif', marginTop: '20vh' }}>
          Building the future, one line of code at a time.
        </div>
        <div>
          {projectBig.map((card, i) => (
            <Card
              key={i}
              projectImage={card.image}
              title={card.title}
              descrip={card.descrip}
              linkGit={card.linkGit}
              linkPage={card.linkPage}
            />
          ))}
        </div>
        
        <div className="row" style={{ marginBottom: '10vh' }}>
          {projectSmall.map((item, i) => (
            <SmallCard 
              key={i}
              projectImage={item.image}
              title={item.title}
              linkGit={item.linkGit}
              linkPage={item.linkPage}
            />
          ))}  
            
        </div>

        {/* <div className="col mb-5 boxShad ms-5 rounded-4 d-flex justify-content-center align-items-center" style={{ marginTop: '10vh', width: '100%' }}>
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
          </div> */}

      </div>


    </>
  )
}
