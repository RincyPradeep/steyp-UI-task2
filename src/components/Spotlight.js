import React from 'react'

import {Link} from 'react-router-dom'
import styled from 'styled-components'
import SlantingText from './SlantingText'


function Spotlight() {
  return (
    <Container>
        <Wrapper>
            <LeftContainer>
                <Top>
                    <SlantingText text="Hello!" />
                    <Title>We have Design Experience</Title>
                    <Description>
                        <DescriptionLeft><p>__</p></DescriptionLeft>
                        <DescriptionRight>
                            <p>Hi! I'am a UI/UX Designer--- creating bold & brave interface design for companies all across the world</p>
                        </DescriptionRight>
                    </Description>
                    <ButtonContainer>
                        <BgButton>
                            <Left>
                                <p>Let's Talk</p>
                            </Left>
                            <Right>
                                <img src={require('../assets/images/telegram_outline.svg').default} alt='arrow' />
                            </Right>
                        </BgButton>
                        <Button>
                            <Left>
                                <p>Portfolio</p>
                            </Left>
                            <Right>
                                <img src={require('../assets/images/arrow.svg').default} alt='arrow' />
                            </Right>
                        </Button>
                    </ButtonContainer>                   
                </Top>
                <Bottom>
                    <Left>
                        <p className='checkout'>Check Out My</p>
                    </Left>
                    <Right>
                        <UList>
                            <List>
                                <Link to="#"><img src={require('../assets/images/insta_icon.svg').default} alt='logo' /></Link>
                            </List>
                            <List>
                                <Link to="#"><img src={require('../assets/images/dribble_icon.svg').default} alt='logo' /></Link>
                            </List>
                            <List>
                                <Link to="#"><img src={require('../assets/images/behance_icon.svg').default} alt='logo' /></Link>
                            </List>
                        </UList>
                    </Right>
                </Bottom>
            </LeftContainer>
            <RightContainer>
                <Quote>
                    <p>"People ignore design <br/>that ignores people"</p>
                </Quote>
                <Image>
                    <img src={require('../assets/images/spotlight.png')} alt='hero' />
                </Image>
                <Icon>
                    <img src={require('../assets/images/play_icon.svg').default} alt='play icon' />  
                </Icon>
            </RightContainer>
        </Wrapper>
    </Container>
  )
}

export default Spotlight


const Container = styled.div`
    padding: 140px 0 50px;
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
    align-items: space-between;

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
    color: #60625d;

    @media all and (max-width:480px){
        font-size: 14px;
        line-height: 1.6;
    }
`


const DescriptionLeft = styled.div`
    margin-right: 30px;
    margin-top: -10px;
`


const DescriptionRight = styled.div`
   
`


const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    p{
        font-family:intersemibold;
    }
    img{
        width: 20px;
    }
`


const Button = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 30px;
    padding: 15px 25px;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    &:last-child{
        margin-right: 0;
    }

    @media all and (max-width:980px){
        padding: 15px 10px;
    }
    @media all and (max-width:480px){
        padding: 8px 10px;
    }
`


const BgButton = styled(Button)`
    background-color: #8873EF;
    color: #fff;
    cursor: pointer;
`


const Left = styled.div`
    margin-right: 20px;

    @media all and (max-width:1280px){
        p{
            &.checkout{
                margin-right: 10px;
                font-size: 14px;
            }
        }
    }
`

const Right = styled.div`
    
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;

    @media all and (max-width:980px){
        flex-direction: column;
        p{
            &.checkout{
                margin-bottom: 10px;
            }
        }
    }
    @media all and (max-width:768px){
        margin-top: 20px;
        margin-bottom: 20px;
    }
`


const UList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const List = styled.div`
    margin-right: 30px;
    a{
        display: block;
        width: 80px;
        img{
            width: 100%;
        }
    }
    &:last-child{
        margin-right: 0;
    } 

    @media all and (max-width:1280px){
        margin-right: 10px;
        a{
            width:65px;
        }
    }
`


const RightContainer = styled.div`
    width: 50%;
    position: relative;

    @media all and (max-width:768px){
    margin: auto;
    }
`


const Quote = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    p{
        font-family: intersemibold;
        font-size: 22px;
        line-height: 1.8;
    }

    @media all and (max-width:1280px){
        p{
            font-size: 18px;
        }
    }
    @media all and (max-width:980px){
        p{
            font-size: 14px;
        }
    }
    @media all and (max-width:768px){
        p{
            font-size: 12px;
        }
    }
    @media all and (max-width:640px){
        right: -65px;
    }
    @media all and (max-width:480px){
        p{
            font-size: 10px;
        }
    }
`


const Image = styled.div`
    width: 100%;
    img{
        width: 100%;
    }
   
`


const Icon = styled.div`
    width: 150px;
    position: absolute;
    top: 44%;
    left: 36%;
    img{
        width: 100%;
    }

    @media all and (max-width:1280px){
        width: 110px;
        top: 44%;
        left: 36%;
    }
    @media all and (max-width:980px){
        width: 90px;
        top: 25%;
        left: 34%;
    }
    @media all and (max-width:768px){
        width:70px;
        top:40%;
    }
    @media all and (max-width:480px){
        width: 40px;
    }
`