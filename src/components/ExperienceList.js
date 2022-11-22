import React from 'react'

import styled from 'styled-components'


function ExperienceList({year,designation,company}) {
  return (
    <RightList>
        <ColumnLeft><p>{year}</p></ColumnLeft>
        <ColumnRight>
            <p>{designation}</p>
            <small>{company}</small>
        </ColumnRight>
    </RightList>
  )
}

export default ExperienceList


const RightList = styled.li`
    display: flex;
    border-top: 2px solid #60625d;
    padding: 30px 0;
`

const ColumnLeft = styled.div`
    margin-right:100px;
    p{
        font-family: intersemibold;
    }

`

const ColumnRight = styled.div`

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