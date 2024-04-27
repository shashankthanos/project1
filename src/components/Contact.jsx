import React from 'react';
import '../Styles/Contact.css';

function Contact() {
  return (
    <div className='h-auto w-full md:w-11/12 mx-2 md:mx-12' id='contact'>
      <h1 className='text-5xl mt-8 md:mt-36 ml-4 md:ml-20'>Contact</h1>
      <div className='flex flex-col md:flex-row my-12'>
        <div className='con h-72 md:h-96 w-full md:w-3/6 bg-no-repeat bg-center bg-cover'></div>
        <div className='h-auto w-full md:w-3/6 mt-8 md:mt-0 md:ml-8'>
          <form action="" className='h-full flex flex-col justify-between'>
            <input type="text" placeholder='Name *' className='p-4 bg-transparent border rounded-lg mb-4' />
            <input type="text" placeholder='Email *' className='p-4 bg-transparent border rounded-lg mb-4' />
            <input type="number" placeholder='Mobile Number *' className='p-4 bg-transparent border rounded-lg mb-4' />
            <textarea name="" id="textarea" placeholder='Message *' rows="4" className='p-4 bg-transparent border rounded-lg mb-4'></textarea>
            <button className='p-3 bg-gray-500'>Send Message</button>
          </form>
        </div>
      </div>
      <p className='text-center'>Copyright | All Rights reserved 2024</p>
    </div>
  );
}

export default Contact;
