import React, { useEffect, useState } from 'react';
import Vid2 from '../assets/vid1.webm';

function Hero({ user }) {
  const [typedQuote, setTypedQuote] = useState('');

  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => {
      if (user && user.about && user.about.quote) {
        const delay = 100; // Adjust typing speed here
        const quote = user.about.quote;
        let index = 0;
        const typing = setInterval(() => {
          setTypedQuote(quote.substring(0, index));
          index++;
          if (index > quote.length) {
            clearInterval(typing);
          }
        }, delay);
        return () => clearInterval(typing);
      }
    }, 5000); // 2 seconds delay
    return () => clearTimeout(timeout);
  }, [user]);

  return (
    <div className='h-2/4 w-screen flex flex-col justify-center items-center'>
      <video src={Vid2} autoPlay loop muted className='h-full w-full object-cover' />
      <h1 className='text-5xl text-white md:text-7xl lg:text-9xl mx-4 md:mx-20 my-8 md:my-20 absolute'>{typedQuote}</h1>
    </div>
  );
}

export default Hero;
