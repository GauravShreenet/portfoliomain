import React from 'react'
import { Card } from '../component/Card'
import imageMovie from '../asset/movieapi.PNG'
import imageSuper from '../asset/SuperApi.PNG'
import imageRpc from '../asset/RockPaperScissor.PNG'
import imagePrank from '../asset/prankCal.PNG'
import { SmallCard } from '../component/SmallCard'
import { Transition } from '../component/Transition'

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
      image: imageSuper,
      title: "SuperHuman API",
      descrip: "Discover and get the details of comic characters with ease. Search for heroes and villains to know their stats.",
      linkGit: "https://github.com/GauravShreenet/superhuman",
      linkPage: "https://superhuman.vercel.app/"
    },
  ]

  const projectSmall = [
    {
      image: imageRpc,
      title: "Rock Paper Scissors",
      linkGit: "https://github.com/GauravShreenet/RockPaperScissors",
      linkPage: "https://gauravshreenet.github.io/RockPaperScissors/"
    },
    {
      image: imagePrank,
      title: "Prank Calculator",
      linkGit: "https://github.com/GauravShreenet/prankCalculator",
      linkPage: "https://gauravshreenet.github.io/prankCalculator/"
    },
  ]

  return (
    <>
      <Transition />
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

        <div className="row d-flex justify-content-between" style={{ marginBottom: '10vh' }}>
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

        <div style={{ marginBottom: '20vh' }}>
          <div className="fs-6 text-uppercase" style={{ marginTop: '30vh' }}>
            there's more
          </div>
          <h3 className='mt-3 fw-bold'>GitHub Projects</h3>
          <p className='text-white-50'>These projects can be fond in my GitHub repository, a testament to my ongoing journey of improvement.</p>
          <ol>
            <li className='mt-5'><a href="https://github.com/GauravShreenet/react_apipractice" target='_blank' className='text-light fs-4'><span className='text-decoration-underline' style={{
              display: 'inline-block',
              transition: 'transform 0.2s ease'}}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateX(10px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateX(0)')}>Marvel Api</span></a></li>
            <li className='mt-5'><a href="https://github.com/GauravShreenet/RandomUserApiCall" target='_blank' className='text-light fs-4'><span className='text-decoration-underline hover-effect'>Random User</span></a></li>
            <li className='mt-5'><a href="https://github.com/GauravShreenet/React_NTDL" target='_blank' className='text-light fs-4'><span className='text-decoration-underline hover-effect'>Not To Do List</span></a></li>
            <li className='mt-5'><a href="https://github.com/GauravShreenet/Notetaking" target='_blank' className='text-light fs-4'><span className='text-decoration-underline hover-effect'>To Do List</span></a></li>
            <li className='mt-5'><a href="https://github.com/GauravShreenet/paralaxpractice" target='_blank' className='text-light fs-4'><span className='text-decoration-underline hover-effect'>Parallax Basic</span></a></li>
          </ol>
        </div>
      </div>
    </>
  )
}
