import React from 'react'

import styled from 'styled-components'

import ContactPartOne from './ContactPartOne'
import ContactPartTwo from './ContactPartTwo'


function Contact() {
  return (
    <Container>
        <Wrapper>
            <ContactPartOne />
            <ContactPartTwo />
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
    @media all and (max-width:980px){
        flex-direction: column;
    }
`


