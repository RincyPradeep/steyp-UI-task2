import React from 'react'

import Header from '../components/Header';
import Services from '../components/Services';
import SkillsAndExperience from '../components/SkillsAndExperience';
import Spotlight from '../components/Spotlight';


function LandingPage() {
  return (
    <>
      <Header />
      <Spotlight />
      <Services />
      <SkillsAndExperience />
    </> 
  );
}

export default LandingPage;