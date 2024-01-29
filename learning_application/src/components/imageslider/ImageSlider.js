import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import '../imageslider/imageslider.css'


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const autoSlideInterval = 3000; 

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoSlideInterval);

    return () => {
      clearInterval(interval);
    };
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    
    <section className='slider'>
      <FaArrowLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <>
    
              <img src={slide.image} alt='travel image' className='image' />
              <text className='caption'>{slide.caption}</text>

              </>
              

              // <div style={{backgroundImage:`url(${slide.image})`}} className='image'/>
            )}

          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
