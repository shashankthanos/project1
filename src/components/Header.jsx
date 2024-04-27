import React, { useEffect, useState, useRef } from 'react';
import Video2 from '../assets/vid2.mp4';
import '../Styles/Header.css';

const Header = ({ user, social }) => {
  const [toggle, setToggle] = useState(false);
  const [showNavbarStyles, setShowNavbarStyles] = useState(false);
  const [typedText, setTypedText] = useState('');
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        setShowNavbarStyles(true);
      } else {
        setShowNavbarStyles(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setToggle(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      if (user && user.about && user.about.subTitle) {
        const delay = 100; // Adjust typing speed here
        const subTitle = user.about.subTitle;
        let index = 0;
        const typing = setInterval(() => {
          setTypedText(subTitle.substring(0, index));
          index++;
          if (index > subTitle.length) {
            clearInterval(typing);
          }
        }, delay);
        return () => clearInterval(typing);
      }
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timeout);
  }, [user]);

  const handleToggleClick = (event) => {
    event.stopPropagation();
    setToggle(!toggle);
  };

  return (
    <div className='header h-screen w-full bg-cover bg-center flex flex-col justify-evenly items-center'>
      <video src={Video2} autoPlay loop muted className='object-cover'></video>
      <div className={`navbar h-18 w-5/6 flex justify-between items-center fixed p-5  transition-all duration-200 ${showNavbarStyles ? ' rounded-full bg-gray-400 backdrop-filter backdrop-blur-md  border border-opacity-25' : ''} `}>
        <h1 className='text-4xl'>John</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill='black' onClick={handleToggleClick} >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </div>
      {toggle &&
        <div ref={toggleRef} className=' h-screen flex flex-col text-right w-1/4 px-5 pt-20 fixed bg-gray-800 rounded-xl' style={{ marginLeft: "75%" }}>
          <a href='#about' className='text-5xl text-white'>About</a><br />
          <a href='#skill' className='text-5xl text-white'>Skills</a><br />
          <a href='#experience' className='text-5xl text-white'>Experience</a><br />
          <a href='#projects' className='text-5xl text-white'>Projects</a><br />
          <a href='#services' className='text-5xl text-white'>Services</a><br />
          <a href='#contact' className='text-5xl text-white'>Contact</a><br />
        </div>
      }
      <div className="container flex flex-col justify-center items-center absolute">
        <strong className='text-8xl text-white'>{user.about.name}</strong>
        <h1 className='text-2xl text-white'>{user.about.title}</h1>
        <h1 className='text-l text-white'>{typedText}</h1>
        <div className=' h-5 w-2/6 flex justify-center items-center'>
          {social.map((social, index) => (
            <a href={social.url} key={index} className='ml-2 mt-20'><img className='w-full h-12' src={social.image.url} alt="loading.." /></a>
          ))}
        </div>
      </div>
      <div className="arrow flex flex-col absolute">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 mr-1 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 10l7 7 7-7" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="white">
          <path d="M12 15.41L18.59 9.83 20 11.24 12 19.24 4 11.24 5.41 9.83z" />
        </svg>
      </div>
    </div>
  );
}

export default Header;
