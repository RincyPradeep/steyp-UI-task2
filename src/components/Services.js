import React from 'react'

import styled from 'styled-components'

import ServiceList from './ServiceList'
import SlantingText from './SlantingText'


function Services() {
  return (
    <Container>
        <Wrapper>
            <LeftContainer>
                <Top>
                    <SlantingText text="Service" />
                    <Title>Services I <br/> offer</Title>
                    <Description>
                        <Left><p>__</p></Left>
                        <Right>
                            <p>We help ambitious business like your generate more profits by building awareness,
                                 driving web traffic, connecting with customers and growing overall sales
                            </p>
                        </Right>
                    </Description>                   
                </Top>
                <Bottom>
                    <img src={require('../assets/images/view_all_service_seal.png')} alt='seal' />                    
                </Bottom>
            </LeftContainer>
            <RightContainer>
                <UList>                   
                    <ServiceList number="01" title="Web UI/UX Design" />
                    <ServiceList number="02" title="Mobile App UI/UX Design" />
                    <ServiceList number="03" title="Dashboard & Saas Design" />                   
                </UList>
            </RightContainer>
        </Wrapper>
    </Container>
  )
}

export default Services


const Container = styled.div`
    padding: 100px 0;
    background-color: #FCDA69;

    @media all and (max-width:480px){
        padding: 50px 0;   
    }
`


const Wrapper = styled.div`
    width:90%;
    margin:0 auto;
    display: flex;
    justify-content: space-between;

    @media all and (max-width:768px){
        flex-direction: column;
    }
`


const LeftContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media all and (max-width:768px){
        width: 100%;
    }
`


const Top = styled.div`
    
`


const Title = styled.h2`
    @media all and (max-width:1280px){
        font-size: 40px;
    }
    @media all and (max-width:480px){
        font-size: 30px;
    }
    
`


const Description = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    @media all and (max-width:480px){
        font-size: 14px;
        line-height: 1.6;
    }
`


const Left = styled.div`
    margin-right: 30px;
    margin-top: -10px;
`


const Right = styled.div`
   
`


const Bottom = styled.div`
    width: 200px;
    img{
        width: 100%;
    }

    @media all and (max-width:1280px){
        width: 150px;
    }
    @media all and (max-width:768px){
        width: 100px;
    }
`


const RightContainer = styled.div`
    width: 40%;
    
    @media all and (max-width:768px){
        width: 100%;
        margin-top: 30px;
    }
`

const UList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`





