import React from 'react';
import { Home } from '../Home/Home';
import Projects from '../Project/Project';
import Contact from '../Contact/Contact';
import { About } from '../About/About';

const Hero = () => {
    return (
        <section className="hero">
           <Home />
           <Projects />
           <Contact />
           <About />
        </section>
    );
};

export default Hero;
