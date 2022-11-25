import React from 'react'

import styled from 'styled-components'

import PageTop from '../components/PageTop'
import ProjectContainer from '../components/ProjectContainer'
import { project_data } from '../assets/js/ProjectData'


function Projects() {
  return (
    <Container>
      <PageTop text="Hello!" title="Latest | Projects" description="We help ambitious business like your 
          generate more profits by building awareness,ndriving web traffic, connecting with customers and growing overall sales" 
      />
      <Wrapper>
        {
          project_data.map(data=>{
            return(
              <ProjectContainer
                title={data.title} subtitle1={data.subtitle1} subtitle2={data.subtitle2} subtitle3={data.subtitle3} 
                subtitle4={data.subtitle4} description1={data.description1} description2={data.description2} description3={data.description3}
                description4={data.description4} image1={data.image1} image2={data.image2} image3={data.image3} image4={data.image4} seal={data.seal}
                key={data.id}
              />
            )
          })
        }
      </Wrapper>
    </Container>
  )
}

export default Projects


const Container = styled.div`
    
`

const Wrapper = styled.div`
    width:90%;
    margin:0 auto;
    padding: 50px 0;
`