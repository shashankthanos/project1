import React from 'react';

function Services({ service }) {
  return (
    <div className='h-full w-screen mt-16' id='services'>
      <h1 className='text-5xl mt-16 ml-4 md:ml-20'>Services</h1>
      <div className='container flex flex-wrap justify-center items-center'>
        {service.map((ser, index) => (
          <div key={index} className='bg-cover bg-center h-auto md:h-56 w-full md:w-2/5 m-5' style={{ backgroundImage: `url(${ser.image.url})` }}>
            <div className="w-full h-full bg-gradient-to-r from-black to-transparent flex flex-col justify-center items-left p-4 md:p-6">
              <h1 className='text-xl text-white mb-2'>{ser.name}</h1>
              <strong className="text-lg text-white mb-2">Charge: {ser.charge}</strong>
              <p className="text-white">{ser.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;
