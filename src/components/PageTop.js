import React from 'react'

import styled from 'styled-components'

import SlantingText from '../components/SlantingText'


function PageTop({text,title,description}) {
  return (
    <Top>
        <Content>
        <TopLeft>
            <SlantingText text={text} />
            <Title>{title}</Title>
            <Description>
                <Left><p>__</p></Left>
                <Right>
                    <p>{description}</p>
                </Right>
            </Description>                   
        </TopLeft>
        <TopRight>
            <img src={require("../assets/images/view_all_service_seal.svg").default} alt="seal" />
        </TopRight>
        </Content>
    </Top>
  )
}

export default PageTop


const Top = styled.div`
    background-color: #FCDA69;
    padding: 80px 0;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width:90%;
    margin:0 auto;
`

const TopLeft = styled.div`
    width: 40%;
`

const Title = styled.h2`
    width: 500px;
`

const Description = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    color: #60625d;
`

const TopRight = styled.div`
    width: 200px;
    padding-left: auto;
    img{
      width:100%;
    }
`

const Left = styled.div`
    margin-right: 30px;
    margin-top: -10px;
`

const Right = styled.div`
   
`