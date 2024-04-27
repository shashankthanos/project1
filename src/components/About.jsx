import React from 'react'
import '../Styles/About.css'

const About = ({ user, social }) => {

  return (
    <div className='about h-max w-screen md:h-full w-full block' id='about'>
      <h1 className='text-5xl mt-36 ml-20'>About</h1>
      <div className='about-in flex items-center '>
        <div className="pic  bg-cover bg-center m-12 rounded-xl"></div>
        <div className='john w-2/3 '>
          <strong className='text-6xl'>{user.about.name}</strong><br /><br />
          <h2 className='text-2xl'>{user.about.subTitle}</h2><br />
          <h3 className='text-xl'>{user.about.description}</h3><br />
          <p>{user.about.address}</p><br />
          <div className='social h-12 md:h-16 w-full md:w-3/5 lg:w-52 flex justify-between items-center'>
            {social.map((social, index) => (
              <a href={social.url} key={index} className=''><img className='w-10 md:w-12 h-auto' src={social.image.url} alt="loading.." /></a>
            ))}
          </div>
          <br />
          <a href="#contact"><button className='bg-purple-500 hover:bg-purple-700 text-white m-5 py-3 px-4 rounded'>contact</button></a>
        </div>
      </div>
    </div>
  )
}

export default About