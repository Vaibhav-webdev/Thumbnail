import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Skills from './components/Skills'
import AboutServices from './components/AboutServices'
import Projects from "./components/Projects"
import Contact from './components/Contact'
import { useEffect, useState } from "react";

const page = () => {
  useEffect(() => {
    // Wrapping navigator call in a promise directly
    const fetchLocation = async () => {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported by this browser.");
        return;
      }

      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLocation();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <AboutServices />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default page
