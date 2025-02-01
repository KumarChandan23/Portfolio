import React from 'react';
import { Home } from '../Home/Home';
import Projects from '../Project/Project';
import Contact from '../Contact/Contact';
import { About } from '../About/About';
import Skills from '../Skills/Skills';

const Hero = () => {
    return (
        <section className="hero" style={{padding:"0 40px"}}>
           <Home />
           <Skills/>
           <Projects />

           <About />
           <Contact />
        </section>
    );
};

export default Hero;
