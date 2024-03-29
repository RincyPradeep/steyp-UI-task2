import React from 'react'

import styled from 'styled-components'


function ProjectList({title,description,img,type}) {
  return (
    <List type={type}>
        <ListTitle>
            <h6>{title}</h6>
            <img src={require('../assets/images/service_arrow.svg').default} alt='arrow' />
        </ListTitle>
        <ListDescription>{description}</ListDescription>
        <ListImage>
            <img src={img} alt="project" />
        </ListImage>
    </List>
  )
}

export default ProjectList


const List = styled.li`
    width: 30%;
    border-top: 2px solid #60625d;
    padding-top: 20px;
    position: absolute;
    left: ${({type})=>type==="one"? 0  : type==='two'? '35%' : '70%'};
    top: ${({type})=> type==="one" ? '230px'  : type==='two'? '115px' : 0};

    @media all and (max-width:640px){
        width: 80%;
        margin: 20px auto;
        position: static !important;
    }
   
`


const ListTitle = styled.div`
    display: flex;
    justify-content: space-between;
    h6{
        width: 55%;
        line-height: 1.2;
    }
    img{
        width: 50px;
    }

    @media all and (max-width:980px){
        h6{
            font-size: 20px;
        }
    }
    @media all and (max-width:768px){
        h6{
            width: 80%;
        }
    }
    @media all and (max-width:640px){
    img{
        width:25px;
    }
    }
`


const ListDescription = styled.p`
    margin: 10px 0;
    font-family: intersemibold;
`


const ListImage = styled.div`
    width:100%;
    img{
        width: 100%;
    }
`