import React from 'react'

import styled from 'styled-components'

import SlantingText from './SlantingText'


function Testimonials() {
  return (
    <Container>
        <Wrapper>
            <Top>
                <TopLeft>
                    <SlantingText text="Testimonial" />
                    <Title>Client's Kind Word</Title>
                </TopLeft>
                <TopMiddle>
                    <span>__</span>                        
                    <p>We help ambitious business like your generate more profits by building awareness,
                        driving web traffic, connecting with customers and growing overall sales.
                    </p>
                </TopMiddle>
                <TopRight>
                    <img src={require('../assets/images/clients_page_arrow3.svg').default} alt="seal" />
                </TopRight>              
            </Top>
            <Bottom>
                <BottomLeft>
                    <img src={require("../assets/images/client_person2.png")} alt="client" />
                </BottomLeft>
                <BottomMiddle>
                    <Content><span>"I've Been Working </span>with Casey Exclusively Since 2014 profits by building awareness, 
                        driving web traffic, connecting with customers and growing overall. We help ambitious A <span>Proffessional Design </span>
                        business profits by building awareness, driving web traffic, connecting with customers and we help ambit as the 
                        <span> Visual Design</span>"
                    </Content>
                    <Name>Mustafa Rahman</Name>
                    <Designation>- CEO Toogle</Designation>
                </BottomMiddle>
                <BottomRight>
                    <img src={require("../assets/images/client_person1.png")} alt="client" />
                </BottomRight>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Testimonials


const Container = styled.div`
    padding: 100px 0;
`

const Wrapper = styled.div`
    width: 90%;
    margin:0 auto;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`

const TopLeft = styled.div`
    width: 30%;   
`

const Title = styled.h2`
    
`

const TopMiddle = styled.div`
    display: flex;
    width: 40%;
    span{
        display: block;
        margin-right: 40px;
        margin-top: -10px;
    }
    p{
        width: 75%;
        color: #60625d;
    }
`

const TopRight = styled.div`
    width: 20%;
    margin-top:auto;
    img{
        width: 65%;
    }
`

const Bottom = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BottomLeft = styled.div`
    img{
        width: 370px;
    }
`

const BottomMiddle = styled.div`
    margin: 0 30px;
    border-top: 2px solid #60625d;
    border-bottom: 2px solid #60625d;
    padding: 50px 0;
`

const Content = styled.p`
    color: #60625d;
    line-height: 1.8;
    font-size: 18px;
    span{
        font-weight: 600;
        color: #000;
    }
`

const Name = styled.h6`
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 22px;
`

const Designation = styled.small`
    color: #60625d;
`

const BottomRight = styled.div`
    img{
        width: 370px;
    }
`