import React from 'react'
import About from '../Component/About';
import Hero from '../Component/Hero';
import Skills from '../Component/Skills';
import Projects from '../Component/Project';
import Services from '../Component/Service';
import Contact from '../Component/Contact';

function Home() {
  return (
      <div>
          <Hero/>
          <About />
          <Skills />
          {/* <Projects /> */}
          <Services />
          <Contact/>
    </div>
  )
}

export default Home