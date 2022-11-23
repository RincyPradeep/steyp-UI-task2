import React from 'react'

import styled from 'styled-components'

import ContactList from './ContactList'
import SlantingText from './SlantingText'
import MessageBox from '../assets/images/message_box_with_bg.svg'
import Location from '../assets/images/location_with_bg.svg'


function Contact() {
  return (
    <Container>
        <Wrapper>
            <LeftContainer>
                <SlantingText text="Contact" />
                <Title>Let's Discuss Your Project</Title>
                <ContactList img={MessageBox} text="Email" address="client.tnim@gmail.com" />
                <ContactList img={Location} text="Location" address="Washington Ave.Manchester, Kentucky, 39495" />
            </LeftContainer>
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
        </Wrapper>
        <hr/>
    </Container>
  )
}

export default Contact


const Container = styled.div`
    padding: 100px 0 50px;
    background-color: #FCDA69;
    hr{
        width:80%;
        margin-left: 5%;
        margin-top: 50px;
        border-top: 1px solid #000;

    }
`

const Wrapper = styled.div`
    width: 90%;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LeftContainer = styled.div`
    width: 40%;
`

const Title = styled.h2`
    line-height: 1.6;
    margin-bottom: 30px;
`

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

