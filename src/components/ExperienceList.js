import React from 'react'

import styled from 'styled-components'


function ExperienceList({year,designation,company,description}) {
  return (
    <RightList>
        <ColumnLeft><p>{year}</p></ColumnLeft>
        <ColumnRight>
            <p>{designation}</p>
            <small>{company}</small>
            {description && <small>{description}</small>}
        </ColumnRight>
    </RightList>
  )
}

export default ExperienceList


const RightList = styled.li`
    width:100%;
    display: flex;
    border-top: 1px solid #c3c5c1;
    padding: 30px 0;
`

const ColumnLeft = styled.div`
    width:25%;
    margin-right:50px;
    p{
        font-family: intersemibold;
    }

`

const ColumnRight = styled.div`
   width: 75%;
    p{
        font-family: interbold;
        font-size: 20px;
    }
    small{
        color: #60625d;
        display: block;
        margin-top: 20px;
    }

`