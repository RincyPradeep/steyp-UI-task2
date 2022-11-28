import React from 'react'

import styled from 'styled-components'

import SkillsList from './SkillsList'
import VisualDesign from '../assets/images/visual_icon.svg'
import WireFrame from '../assets/images/wire_frame.svg'
import UX from '../assets/images/ux_icon.svg'
import Prototype from '../assets/images/prototype.svg'
import ArtDirection from '../assets/images/art_direction.svg'
import UserResearch from '../assets/images/user_research.svg'


function Skillset() {
  return (
    <LeftUList>
        <SkillsList src={VisualDesign} text="Visual design" />
        <SkillsList src={WireFrame} text="Wire frame" />
        <SkillsList src={UX} text="User Experience Design" />
        <SkillsList src={Prototype} text="Prototype" />
        <SkillsList src={ArtDirection} text="Art Direction" />
        <SkillsList src={UserResearch} text="User Research" />
    </LeftUList>
  )
}

export default Skillset


const LeftUList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   width: 100%;
`