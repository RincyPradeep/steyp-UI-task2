import React from 'react'

import styled from 'styled-components'


function SkillsList({src,text}) {
  return (
    <LeftList>
        <img src={src} alt={text} />                    
        <p>{text}</p>
    </LeftList>
  )
}

export default SkillsList


const LeftList = styled.li`
    margin-right: 50px;
    margin-bottom: 50px;
    width: 130px;
    img{
        width:80px;
        margin-bottom: 20px;
    }
    &:nth-child(3n){
        margin-right: 0;
    }
    @media all and (max-width:1280px){
      margin-right: 20px;
      width: 100px;
      img{
        width: 70px;
      }
    }
    @media all and (max-width:768px){
      width: 140px;
    }
    @media all and (max-width:640px){
      width: 130px;
      text-align: center;
    }
`