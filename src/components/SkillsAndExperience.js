import React from 'react'

import styled from 'styled-components'

import SlantingText from './SlantingText'
import ExperienceList from './ExperienceList'
import Skillset from './Skillset'


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
                    <Skillset />
                </Bottom>
            </LeftContainer>
            <RightContainer>
                <SubTitle>Experience</SubTitle>
                <RightUList>       
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
    @media all and (max-width:980px){
        flex-direction: column;
    }
`

const LeftContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media all and (max-width:980px){
        width: 100%;
    }
`

const Top = styled.div`
    
`

const Title = styled.h2`
    @media all and (max-width:1280px){
        font-size: 40px;
    }
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

const RightContainer = styled.div`
    width: 40%;
    @media all and (max-width:980px){
        width: 100%;
    }
`

const RightUList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
`

