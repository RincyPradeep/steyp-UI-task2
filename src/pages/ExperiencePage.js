import React from 'react'

import styled from 'styled-components'

import { experience_data } from '../assets/js/ExperienceData'
import ExperienceList from '../components/ExperienceList'
import PageTop from '../components/PageTop'
import Skillset from '../components/Skillset'


function Experience() {
  return (
    <Container>
      <PageTop text="Hello!" title="Skills & Experience" description="We help ambitious business like your 
            generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales" 
      />
        <Wrapper>
          <Middle>
            <SubTitle>Skills</SubTitle>
            <MiddleSub>
              <Skillset />
            </MiddleSub>
          </Middle>
          <Bottom>
            <SubTitle>Experience</SubTitle>
            <UList>
              {
                experience_data.map(data=>{
                  return(
                    <ExperienceList year={data.year} designation={data.designation} company={data.company} description={data.description} key={data.id} />
                  )
                })
              }    
            </UList>          
          </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Experience


const Container = styled.div`
    padding: 0 0 100px;
    @media all and (max-width:640px){
        padding: 0 0 50px;
    }
`

const Wrapper = styled.div`
    width:90%;
    margin:0 auto;
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

const UList = styled.ul`

`