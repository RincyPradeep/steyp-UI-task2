import React from 'react'

import styled from 'styled-components'

import ProjectImage1 from '../assets/images/plantshop_landiing_page.jpg' 
import ProjectImage2 from '../assets/images/vps_landing_page.jpg' 
import ProjectImage3 from '../assets/images/book_landing_page.jpg' 
import ProjectList from './ProjectList'



function Projects() {
  return (
    <Container>
        <Wrapper>
            <Title>Latest Projects</Title>
            <UList>
                <ProjectList title="Plantshop Landing page Design" description="web/loading page" img={ProjectImage1} type="one" />
                <ProjectList title="VPS Hosting Web Design" description="web/loading page" img={ProjectImage2} type="two" />
                <ProjectList title="Book Landing page Design" description="web/loading page" img={ProjectImage3} type="three" />
            </UList>
            <Image>
                <img src={require('../assets/images/view_all_service_seal.svg').default} alt="seal" />
            </Image>
        </Wrapper>
    </Container>
  )
}

export default Projects


const Container = styled.div`
    padding: 100px 0;
    background-color: #FCDA69;
`

const Wrapper = styled.div`
    width: 90%;
    height: 700px;
    margin:0 auto;
    position: relative;
`

const Title = styled.h2`
    width: 100px;
    margin-bottom: 100px;
`

const UList = styled.ul`
   display: flex;
   justify-content: space-between;
`

const Image = styled.div`
   width: 150px;
   position: absolute;
   right:0;
   bottom: 50px;
   img{
    width: 100%;
   }
`

