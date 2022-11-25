import React from 'react'

import styled from 'styled-components'


function ProjectCard({subtitle,description,image}) {
  return (
    <Container>
        <Top>
            <Left>
                <h6>{subtitle}</h6>
                <p>{description}</p>
            </Left>
            <Right>
                <img src={require("../assets/images/service_arrow.svg").default} alt="arrow" />
            </Right>
        </Top>
        <Bottom>
            <img src={require(`../assets/images/${image}`)} alt="project" />
        </Bottom>
    </Container>
  )
}

export default ProjectCard


const Container = styled.div`
    padding: 20px 0;
    border-top: 1px solid #000;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    width: 55%;
    h6{
        line-height: 1.6;
        color: #000;
    }
    p{
        margin: 20px 0;
    }
    
`

const Right = styled.div`
    width: 20%;
    img{

    }
`

const Bottom = styled.div`
    width: 100%;
    img{
        width: 100%;
    }
`