import React from 'react'

import styled from 'styled-components'

import SkillsList from './SkillsList'
import SlantingText from './SlantingText'
import VisualDesign from '../assets/images/visual_icon.svg'
import WireFrame from '../assets/images/wire_frame.svg'
import UX from '../assets/images/ux_icon.svg'
import Prototype from '../assets/images/prototype.svg'
import ArtDirection from '../assets/images/art_direction.svg'
import UserResearch from '../assets/images/user_research.svg'
import ExperienceList from './ExperienceList'


function SkillsAndExperience() {
  return (
    <Container>
        <Wrapper>
            <LeftContainer>
                <Top>
                    <SlantingText text="Experience" />
                    <Title>Skills & Experience</Title>
                    <Description>
                        <Left><p>__</p></Left>
                        <Right>
                            <p>We help ambitious business like your generate more profits by building awareness,
                                 driving web traffic, connecting with customers and growing
                            </p>
                        </Right>
                    </Description>                   
                </Top>
                <Bottom>
                    <SubTitle>Skills</SubTitle>
                    <LeftUList>
                        <SkillsList src={VisualDesign} text="Visual design" />
                        <SkillsList src={WireFrame} text="Wire frame" />
                        <SkillsList src={UX} text="User Experience Design" />
                        <SkillsList src={Prototype} text="Prototype" />
                        <SkillsList src={ArtDirection} text="Art Direction" />
                        <SkillsList src={UserResearch} text="User Research" />
                    </LeftUList>
                </Bottom>
            </LeftContainer>
            <RightContainer>
                <RightUList>       
                    <SubTitle>Experience</SubTitle>
                    <ExperienceList year="2019 - Present" designation="Product Designer" company="Amazon Inc" />
                    <ExperienceList year="2014 - 2006" designation="UI/UX Designer" company="Microsoft" />
                    <ExperienceList year="2014 - 2006" designation=" WebUI/UX Designer" company="Google" />
                    <ExperienceList year="2014 - 2006" designation="UI Designer" company="Facebook" />
                </RightUList>
            </RightContainer>
        </Wrapper>
    </Container>
  )
}

export default SkillsAndExperience


const Container = styled.div`
    padding: 100px 0;
`

const Wrapper = styled.div`
    width:90%;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
`

const LeftContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Top = styled.div`
    
`

const Title = styled.h2`
    
`

const Description = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    color: #60625d;
`

const Left = styled.div`
    margin-right: 30px;
    margin-top: -10px;
`

const Right = styled.div`
   
`

const Bottom = styled.div`
    margin-top: 50px;
`

const SubTitle = styled.h6`
   margin-bottom: 30px;
`

const LeftUList = styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   width: 100%;
`

const RightContainer = styled.div`
    width: 40%;
`

const RightUList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
`

