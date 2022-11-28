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
    margin-bottom: 50px;
    width: 170px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img{
        width:80px;
        margin-bottom: 20px;
    }
    
    @media all and (max-width:1280px){     
      width: 140px;
      img{
        width: 65px;
      }
    }
`