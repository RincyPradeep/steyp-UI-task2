import React from 'react'

import {Link} from 'react-router-dom';
import styled from 'styled-components'


function Footer() {
  return (
    <Container>
        <Wrapper>
            <Top>
                <ColumnOne>
                    <Link to="#">
                        <img src={require('../assets/images/casa_logo.svg').default} alt="logo" />
                    </Link>
                    <Description>
                        We help ambitious business like your generate more profits by building awareness,
                        driving web traffic, connecting with customers and growing overall sales
                    </Description>
                </ColumnOne>
                <ColumnTwo>
                    <Title>Our Service</Title>
                    <UList>
                        <List><Link to="#">Help center</Link></List>
                        <List><Link to="#">FAQ</Link></List>
                        <List><Link to="#">Investation</Link></List>
                        <List><Link to="#">Blog</Link></List>
                    </UList>
                </ColumnTwo>
                <ColumnThree>
                    <Title>Company</Title>
                    <UList>
                        <List><Link to="#">About Us</Link></List>
                        <List><Link to="#">Carrier</Link></List>
                        <List><Link to="#">Management</Link></List>
                        <List><Link to="#">Blog</Link></List>
                    </UList>
                </ColumnThree>
                <ColumnFour>
                    <Title>Contact info</Title>
                    <Contact>
                        <Email>getinfocasa7@gmail.com</Email>
                        <Phone>
                            <img src={require("../assets/images/call_icon.svg").default} alt="call" />
                            <span>+(088 1254 889 760)</span>
                        </Phone>
                        <SocialMedia>
                            <img src={require("../assets/images/facebook.svg").default} alt="facebook" />
                            <img src={require("../assets/images/Linked_in.svg").default} alt="Linked_in" />
                            <img src={require("../assets/images/twitter.svg").default} alt="twitter" />
                            <img src={require("../assets/images/youtube.svg").default} alt="youtube" />
                        </SocialMedia>
                    </Contact>
                </ColumnFour>              
            </Top>
            <Bottom>               
                <Left>
                    <p>copyright@2021 casa inc.</p>
                </Left>
                <Right>
                    <Items>
                        <Link to="#">Privacy</Link>
                        <Link to="#">Security</Link>
                        <Link to="#">Terms</Link>
                    </Items>
                </Right>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Footer


const Container = styled.div`
    padding-top: 50px;
    background-color: #f6f8f4;
`


const Wrapper = styled.div`
    width: 90%;
    margin:0 auto;

    @media all and (max-width:640px){
        li{
            font-size:14px;
        }
    }
`


const Top = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap
`

const ColumnOne = styled.div`
   width: 30%;
   img{
    width: 100px;
   }

   @media all and (max-width:980px){
    width: 100%;
    margin-bottom: 30px;
   }
`


const Description = styled.p`
    color: #60625d;
    line-height: 1.6;
    margin-top:10px;
`


const ColumnTwo = styled.div`
   width: 20%;

   @media all and (max-width:980px){
    width: 30%;
   }
   @media all and (max-width:640px){
        width: 25%;
    }
    @media all and (max-width:480px){
        width: 50%;
    }
`


const Title = styled.p`
   font-family: interbold;
   font-size: 22px;
   margin-bottom: 20px;

   @media all and (max-width:640px){
        font-size:18px;
    }
`


const UList = styled.ul`

`


const List = styled.li`
   margin-top: 10px;
`


const ColumnThree = styled.div`
    width: 20%;

    @media all and (max-width:980px){
        width: 30%;
    }
    @media all and (max-width:640px){
        width: 25%;
    }
    @media all and (max-width:480px){
        width: 50%
    }
`


const ColumnFour = styled.div`
    width: 20%;

    @media all and (max-width:980px){
        width: 30%;
    }
    @media all and (max-width:640px){
        width: 40%;
    }
    @media all and (max-width:480px){
        width: 100%;
        margin-top: 20px;
    }
`


const Contact = styled.div`
    
`


const Email = styled.p`
    margin-top: 15px;

    @media all and (max-width:640px){
        font-size: 14px;
    }
`


const Phone = styled.div`
    margin-top: 15px;
    display:flex;
    align-items: center;
    img{
        margin-right: 10px;
    }

    @media all and (max-width:640px){
        font-size: 14px;
    }
`


const SocialMedia = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    img{
        width:25px;
        margin-right: 30px;
    }

    @media all and (max-width:640px){
        img{
            width: 18px;
        }
    }
`


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:20px 0;
    margin-top: 50px;
    font-family: intersemibold;
    border-top: 1px solid #c3c5c1;

    @media all and (max-width:480px){
        font-size: 12px;
        flex-direction: column;
    }
`


const Left = styled.div`
    @media all and (max-width:480px){
          margin-bottom : 10px;  
    }
`


const Right = styled.div`
   
`


const Items = styled.div`
   a{
    margin-right: 20px;
    &:last-child{
        margin-right: 0;
    }
   }
`