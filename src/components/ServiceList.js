import React from 'react'

import styled from 'styled-components'


function ServiceList({number,title}) {
  return (
    <List>
        <ListContainer>
            <ListLeft>{number}/</ListLeft>
            <ListMiddle>
                <h6>{title}</h6>
                <p>Explore</p>
            </ListMiddle>
            <ListRight>
                <img src={require('../assets/images/service_arrow.svg').default} alt='arrow' />                    
            </ListRight>
        </ListContainer>
    </List>
  )
}

export default ServiceList


const List = styled.li`
    width: 100%;
    margin-bottom: 20px;
    border-top: 1px solid black;
`

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    font-family: intersemibold;
`

const ListLeft = styled.div`

`

const ListMiddle = styled.div`
    width:33%;
    h6{
        line-height: 1.8;
        margin-bottom: 20px;
    }

`

const ListRight = styled.div`
    display: flex;
    align-items: flex-end;
    img{
        width: 50px;
        
    }
`