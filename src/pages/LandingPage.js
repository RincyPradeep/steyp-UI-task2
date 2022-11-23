import React from 'react'

import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Services from '../components/Services';
import SkillsAndExperience from '../components/SkillsAndExperience';
import Spotlight from '../components/Spotlight';
import Testimonials from '../components/Testimonials';


function LandingPage() {
  return (
    <>
      <Header />
      <Spotlight />
      <Services />
      <SkillsAndExperience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </> 
  );
}

export default LandingPage;