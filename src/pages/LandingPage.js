import React from 'react'

import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Services from '../components/Services';
import SkillsAndExperience from '../components/SkillsAndExperience';
import Spotlight from '../components/Spotlight';
import Testimonials from '../components/Testimonials';


function LandingPage() {
  return (
    <>
      <Spotlight />
      <Services />
      <SkillsAndExperience />
      <Projects />
      <Testimonials />
      <Contact />
    </> 
  );
}

export default LandingPage;