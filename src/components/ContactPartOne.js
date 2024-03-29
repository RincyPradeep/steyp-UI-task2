import React from 'react'

import styled from 'styled-components'

import ContactList from './ContactList'
import SlantingText from './SlantingText'
import MessageBox from '../assets/images/message_box_with_bg.svg'
import Location from '../assets/images/location_with_bg.svg'


function ContactPartOne() {
  return (
    <LeftContainer>
        <SlantingText text="Contact" />
        <Title>Let's Discuss Your Project</Title>
        <ContactList img={MessageBox} text="Email" address="client.tnim@gmail.com" />
        <ContactList img={Location} text="Location" address="Washington Ave.Manchester, Kentucky, 39495" />
    </LeftContainer>
  )
}

export default ContactPartOne


const LeftContainer = styled.div`
    width: 40%;

    @media all and (max-width:980px){
      width: 100%;
      margin-bottom: 30px;
    }
`


const Title = styled.h2`
    line-height: 1.6;
    margin-bottom: 30px;
    
    @media all and (max-width:1280px){
      font-size: 40px;
    }
    @media all and (max-width:480px){
        font-size: 30px;
    }
`