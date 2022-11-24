import React from 'react'

import styled from 'styled-components'

import { projects_data } from '../assets/js/ProjectsData'
import ExperienceList from '../components/ExperienceList'
import Skillset from '../components/Skillset'
import SlantingText from '../components/SlantingText'


function Experience() {
  return (
    <Container>
        <Top>
          <Content>
            <TopLeft>
              <SlantingText text="Hello" />
              <Title>Skills & Experience</Title>
              <Description>
                  <Left><p>__</p></Left>
                  <Right>
                      <p>We help ambitious business like your generate more profits by building awareness,
                          driving web traffic, connecting with customers and growing overall sales
                      </p>
                  </Right>
              </Description>                   
            </TopLeft>
            <TopRight>
              <img src={require("../assets/images/view_all_service_seal.svg").default} alt="seal" />
            </TopRight>
          </Content>
        </Top>
        <Wrapper>
          <Middle>
            <SubTitle>Skills</SubTitle>
            <MiddleSub>
              <Skillset />
            </MiddleSub>
          </Middle>
          <Bottom>
            <SubTitle>Experience</SubTitle>
              {
                projects_data.map(data=>{
                  return(
                    <ExperienceList year={data.year} designation={data.designation} company={data.company} description={data.description} key={data.id} />
                  )
                })
              }              
          </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Experience


const Container = styled.div`
    padding: 0 0 100px;

`

const Wrapper = styled.div`
    width:90%;
    margin:0 auto;
`

const Top = styled.div`
    background-color: #FCDA69;
    padding: 80px 0;

`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width:90%;
    margin:0 auto;
`

const TopLeft = styled.div`
    width: 40%;
`

const Title = styled.h2`
    
`

const Description = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    color: #60625d;
`

const TopRight = styled.div`
    width: 200px;
    padding-left: auto;
    img{
      width:100%;
    }
`

const Left = styled.div`
    margin-right: 30px;
    margin-top: -10px;
`

const Right = styled.div`
   
`

const Middle = styled.div`
  padding-top: 80px;
`

const SubTitle = styled.h6`
   margin-bottom: 30px;
   padding-bottom: 10px;
`

const MiddleSub = styled.div`
  padding: 2% 26%;
   border-top: 1px solid #c3c5c1;
`

const Bottom = styled.div`

`