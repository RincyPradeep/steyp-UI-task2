import React from 'react'

import styled from 'styled-components'

import ProjectCard from './ProjectCard'


function ProjectContainer({title,subtitle1,description1,image1,subtitle2,description2,image2,
                            subtitle3,description3,image3,subtitle4,description4,image4,seal}) {
  return (
    <Container> 
        <ColumnOne>
            <Title>
                {
                    title ==="Web Apps" ? <h2>Web <span>Apps</span></h2> :
                    title ==="Mobile Apps" ? <h2><span>Mobile </span>Apps</h2>:
                    <h2>{title}</h2>
                }
            </Title>
            { seal && 
                <ImageContainer>
                    <Image src={require("../assets/images/view_all_service_seal.svg").default} alt="seal" />
                </ImageContainer> 
             }
        </ColumnOne>
        <ColumnTwo>
            <ProjectCard subtitle={subtitle1} description={description1} image={image1} />
            <ProjectCard subtitle={subtitle2} description={description2} image={image2} />
        </ColumnTwo>
        <ColumnThree>
            <ProjectCard subtitle={subtitle3} description={description3} image={image3} />
            <ProjectCard subtitle={subtitle4} description={description4} image={image4} />
        </ColumnThree>
    </Container>
  )
}

export default ProjectContainer


const Container = styled.div`
    display: flex;    
    justify-content: space-between;   
    margin-bottom: 100px; 
    &:nth-child(2n){
        flex-direction: row-reverse;
    }

    @media all and (max-width:980px){
        flex-wrap: wrap;
    }
    @media all and (max-width:480px){
        margin-bottom: 50px;
        @media all and (max-width:980px){
            &:last-child{
                margin-bottom: 0;
            }
        }
    }
`


const ColumnOne = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;   

    @media all and (max-width:980px){
        width: 100%;
        flex-direction: row;
        margin-bottom: 20px;
    } 
`


const Title = styled.div`
    h2{
        color: #000;
        font-size: 55px;
    }
    span{
        color: #FCDA69;
    }

    @media all and (max-width:1280px){
        h2{
            font-size: 40px;
        }
    }
    
`


const ImageContainer = styled.div`
    @media all and (max-width:640px){
        display: none;
    }
`


const Image = styled.img`
    width:150px;
`


const ColumnTwo = styled.div`
    width: 30%;
    margin-top: 100px;

    @media all and (max-width:980px){
        width: 40%;
    }
    @media all and (max-width:480px){
        width: 100%;
        margin-top: 30px;
    }
`


const ColumnThree = styled.div`
    width: 30%;

    @media all and (max-width:980px){
        width: 40%;     
    }
    @media all and (max-width:480px){
        width: 100%;
    }
`