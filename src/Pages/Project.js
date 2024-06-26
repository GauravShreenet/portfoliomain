import React from 'react'
import { Card } from '../component/Card'
import imageMovie from '../asset/movieapi.PNG'
import imageFashion from '../asset/e-comerce.PNG'
import imageLibrary from '../asset/lib.PNG'
import imageCafe from '../asset/CafeApp.PNG'
import imageTranscation from '../asset/TransactionApp.PNG'
import imagePrank from '../asset/prankCal.PNG'
import imageSuper from '../asset/SuperApi.PNG'
import { SmallCard } from '../component/SmallCard'
import { Transition } from '../component/Transition'
import { RevealAni } from '../component/RevealAni'

export const Project = () => {

  const projectBig = [
    {
      image: imageFashion,
      title: "E-Commerce Fashion App",
      descrip: "Welcome to BGS, your ultimate destination for trendy and high-quality fashion, offering a curated selection of clothing and accessories designed to elevate your style and confidence.",
      linkGit: "https://github.com/GauravShreenet/Store-User-CMS-client",
      linkPage: "http://bgsstore.s3-website-us-east-1.amazonaws.com/"
    },
    {
      image: imageLibrary,
      title: "Library App",
      descrip: "Discover endless possibilities, your go-to library app featuring a robust CMS system that allows you to access and manage a vast collection of books, audiobooks, and digital resources anytime, anywhere, making reading and learning more convenient and enjoyable than ever.",
      linkGit: "https://github.com/GauravShreenet/Library-client",
      linkPage: "https://library-client-rho.vercel.app/"
    },
    {
      image: imageTranscation,
      title: "Transaction App",
      descrip: "Streamline Your Finances with Seamless Transactions Anywhere, Anytime! Experience Effortless Management and Control Over Your Money Flow!",
      linkGit: "https://github.com/GauravShreenet/transa-client",
      linkPage: "https://transa-client.vercel.app/"
    },    
  ]

  const projectSmall = [
    {
      image: imageCafe,
      title: "Cafe Front-End Design",
      linkGit: "https://github.com/GauravShreenet/CafeApp",
      linkPage: "https://cafe-app-ten.vercel.app/"
    },
    {
      image: imageMovie,
      title: "Movie API",
      linkGit: "https://github.com/GauravShreenet/MovieApi",
      linkPage: "https://movie-api-taupe.vercel.app/"
    },
    {
      image: imageSuper,
      title: "Super Hero Detail",
      linkGit: "https://github.com/GauravShreenet/superhuman",
      linkPage: "https://superhuman.vercel.app/"
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
          <RevealAni>Building the future, one line of code at a time.</RevealAni>
        </div>
        <div className='row d-flex justify-content-center me-5'>
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

        <div className="row d-flex flex-wrap justify-content-center me-5" style={{ marginBottom: '5vh' }}>
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
          <div className="fs-6 text-uppercase" style={{ marginTop: '20vh' }}>
          <RevealAni>there's more</RevealAni>
          </div>
          <h3 className='mt-3 fw-bold'><RevealAni>GitHub Projects</RevealAni></h3>
          <p className='text-white-50'><RevealAni>These projects can be fond in my GitHub repository, a testament to my ongoing journey of improvement.</RevealAni></p>
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
