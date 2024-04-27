import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/Testimonial.css';

function Testimonial({ testimonial }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <div className='h-screen w-screen'>
      <h1 className='text-5xl mt-8 md:mt-36 ml-4 md:ml-20'>Testimonials</h1>
      <div className='mx-4 md:mx-auto md:max-w-3xl my-8 md:my-36 border border-white bg-gray-400'>
        <Slider {...settings}>
          {testimonial.map((test, index) => (
            <div key={index} className='inner my-4 md:my-16 px-4 md:px-12  relative block'>
              <div className='h-12 w-12 md:h-16 md:w-16 rounded-full overflow-hidden'>
                <img className='h-full w-full' src={test.image.url} alt="" />
              </div>
              <p className='text-base md:text-xl text-inherit'>{test.review}</p>
              <p className='text-xl md:text-3xl white'>{test.name}</p>
              <p className='text-sm'>{test.position}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
