import React from 'react'

import styled from 'styled-components'


function ContactList({img, text, address}) {
  return (
    <Contact>
        <Left>
            <img src={img} alt="icon" />
        </Left>
        <Right>
            <small>{text}</small>
            <p>{address}</p>
        </Right>
    </Contact>
  )
}

export default ContactList

const Contact = styled.div`
    border-top: 2px solid #60625d;
    padding: 20px 0;
    display: flex;
    align-items: center;
`


const Left = styled.div`
    margin-right: 30px;
    img{
        width: 100px;
    }

    @media all and (max-width:480px){
        img{
            width: 60px;
        }
    }
`


const Right = styled.div`
    small{
        display: block;
        margin-bottom: 10px;
        color: #8873EF;
        font-size: 16px;
        font-weight: 600;
    }
    p{
        font-size: 22px;
        font-weight: 600;
    }
    
    @media all and (max-width:640px){
        p{
            font-size: 18px;
        }
    }
    @media all and (max-width:480px){
        p{
            font-size: 14px;
        }
    }
`