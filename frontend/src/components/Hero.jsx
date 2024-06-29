import React, { useEffect, useState } from 'react'
import img1 from '../assets/images/bg1.jpg';
import img2 from '../assets/images/bg2.jpg'; // Assuming you have this image
import img3 from '../assets/images/bg3.jpg'; // Assuming you have this image  

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const slides = [img1, img2, img3];
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000); // Change slide every 1 second (1000ms)
  
      return () => clearInterval(interval);
    }, []); // Run effect only once on component mount
  
    const prevSlide = () => {
      setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
  
    const goToSlide = (index) => {
      setActiveSlide(index);
    };

  return (
    <div id="indicators-carousel" className="relative w-full">
    <div className="relative h-56 overflow-hidden  md:h-[630px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`duration-200 ease-in-out absolute inset-0 transition-opacity ${
            activeSlide === index ? 'opacity-80' : 'opacity-0'
          }`}
        >
          <img
            src={slide}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 md:top-1/2 left-1/2"
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-40">
        <h1 className="text-xl md:text-4xl font-bold">Let's make a Vibing Music Concert Successful</h1>
      </div>
    </div>

    <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
      {slides.map((_, index) => (
        <button
          key={index}
          type="button"
          className={`w-3 h-3 rounded-full ${
            activeSlide === index ? 'bg-blue-500' : 'bg-white'
          }`}
          aria-current={activeSlide === index}
          aria-label={`Slide ${index + 1}`}
          onClick={() => goToSlide(index)}
        ></button>
      ))}
    </div>
    
    <button
      type="button"
      className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      onClick={prevSlide}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      onClick={nextSlide}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  </div>
  )
}

export default Hero