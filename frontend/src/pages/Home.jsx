import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';  
import About from '../components/About';
import Hero from '../components/Hero';


const Home = () => {

  return (
    <>
      <div className="min-h-[70vh] absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <Navbar />
        <Hero/>
        <About/>
        <Footer />
      </div>
    </>
  );
};

export default Home;

