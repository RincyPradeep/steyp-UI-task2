import React from 'react'

import styled from 'styled-components'


function Spotlight() {
  return (
    <Container>
        <Wrapper>
            <LeftContainer>
                <Top>
                    <Title>We have Design Experience</Title>
                    <Description>
                        <Left>-</Left>
                        <Right>Hi! I'am a UI/UX Designer--- creating bold & brave interface design for companies all across the world</Right>
                    </Description>
                    <ButtonContainer>
                        <BgButton>
                            <Left>Let's Talk</Left>
                            <Right>
                                <img src={require('../assets/images/arrow.svg').default} alt='arrow' />
                            </Right>
                        </BgButton>
                        <Button>
                            <Left>Portfolio</Left>
                            <Right>
                                <img src={require('../assets/images/arrow.svg').default} alt='arrow' />
                            </Right>
                        </Button>
                    </ButtonContainer>                   
                </Top>
                <Bottom></Bottom>
            </LeftContainer>
            <RightContainer>

            </RightContainer>
        </Wrapper>
    </Container>
  )
}

export default Spotlight


const Container = styled.div`
    padding: 50px;
`

const Wrapper = styled.div`
    width:90%;
    margin:0 auto;
`

const LeftContainer = styled.div`
    width: 40%;
`

const Top = styled.div`
    
`

const Title = styled.h2`
    
`

const Description = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
`

const Left = styled.div`
    margin-right: 30px;
`

const Right = styled.div`
   
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`
const Button = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 30px;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    outline: none;
    &:last-child{
        margin-right: 0;
    }
`

const BgButton = styled(Button)`
    background-color: #8873EF;
    color: #fff;

`

const Bottom = styled.div`
    
`

const RightContainer = styled.div`
    width: 60%;
`