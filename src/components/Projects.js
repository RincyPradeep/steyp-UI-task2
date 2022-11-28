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

    @media all and (max-width:480px){
        padding: 50px 0;
    }
`

const Wrapper = styled.div`
    width: 90%;
    height: 700px;
    margin:0 auto;
    position: relative;

    @media all and (max-width:640px){
        height:100%;
    }
`

const Title = styled.h2`
    width: 100px;
    margin-bottom: 100px;

    @media all and (max-width:1280px){
        font-size: 40px;
    }
    @media all and (max-width:640px){
        margin-bottom: 30px;
        width: 100%;
    }
    @media all and (max-width:480px){
        font-size: 30px;
    }
`

const UList = styled.ul`
   display: flex;
   justify-content: space-between;

   @media all and (max-width:640px){
    flex-direction: column;
   }
`

const Image = styled.div`
   width: 150px;
   position: absolute;
   right:0;
   bottom: 50px;
   img{
    width: 100%;
   }
   
   @media all and (max-width:640px){
        display: none;
    }
`

