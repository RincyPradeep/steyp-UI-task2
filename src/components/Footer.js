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
                            <span>+(088 1254 889</span>
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
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`

const ColumnOne = styled.div`
   width: 30%;
   img{
    width: 100px;
   }
`

const Description = styled.p`
    color: #60625d;
    line-height: 1.6;
    margin-top:10px;
`

const ColumnTwo = styled.div`
   width: 20%;
`

const Title = styled.p`
   font-family: interbold;
   font-size: 22px;
   margin-bottom: 20px;
`

const UList = styled.ul`

`

const List = styled.li`
   margin-top: 10px;
`

const ColumnThree = styled.div`
    width: 20%;
`

const ColumnFour = styled.div`
    width: 20%;
`

const Contact = styled.div`
    
`

const Email = styled.p`
    margin-top: 15px;
`

const Phone = styled.div`
    margin-top: 15px;
    display:flex;
    align-items: center;
    img{
        margin-right: 10px;
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
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:20px 0;
    margin-top: 50px;
    font-family: intersemibold;
    border-top: 1px solid #c3c5c1;
`

const Left = styled.div`
   
`

const Right = styled.div`
   
`

const Items = styled.div`
   a{
    margin-right: 20px;
   }
`