import React from 'react'

import styled from 'styled-components'


function ContactPartTwo() {
  return (
    <RightContainer>
        <Content>
            <Left>
                <img src={require("../assets/images/hand_color.svg").default} alt="hi" />
                <span>Say Hi!</span>
            </Left>
            <Right>
                <img src={require("../assets/images/service_arrow.svg").default} alt="arrow" />
            </Right>
        </Content>
    </RightContainer>
  )
}

export default ContactPartTwo


const RightContainer = styled.div`
    width: 600px;
    height: 600px;
    border: 1px solid #60625d;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    width:60%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 2px solid #60625d;
    padding-bottom: 10px;
`

const Left = styled.div`
    display:flex;
    align-items: center;
    img{
        width:50px;
        margin-right: 20px;
    }
    span{
        font-size: 16px;
        font-family: intersemibold;
    }
`

const Right = styled.div`
    img{
        width:130px;
    }
`