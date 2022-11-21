import React from 'react'

import {Link} from 'react-router-dom';
import styled from 'styled-components'


function Header() {
  return (
    <Container>
        <Wrapper>
            <NavLeft>
                <Heading>
                    <Link to='#'>
                        <img src={require('../assets/images/casa_logo.svg').default} alt="logo" />
                    </Link>
                </Heading>
            </NavLeft>
            <NavMiddle>
                <UList>
                    <List><Link to='/'>Home</Link></List>
                    <List><Link to='/services'>Service offer</Link></List>
                    <List><Link to='/experience'>Experience</Link></List>
                    <List><Link to='/projects'>Projects</Link></List>
                    <List><Link to='/contact'>Contact</Link></List>
                </UList>
            </NavMiddle>
            <NavRight>
                <UList>
                    <List ><Link to='/signin'>Sign in</Link></List>
                    <ListButton><Link to='/signup' className='button'>Sign up</Link></ListButton>
                </UList>           
            </NavRight>
        </Wrapper>
    </Container>
  )
}

export default Header


const Container = styled.div`
    height: 90px;
    font-family: 'intersemibold';
    font-size: 18px;
`

const Wrapper = styled.div`
    width:90%;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavLeft = styled.div`
    
`

const Heading = styled.h1`
    font-size: 0;
        a{
            display: block;
            height: 100%;
            img{
                width: 100%;
            }
        }
`

const NavMiddle=styled.div`
  
`

const NavRight=styled.div`
    
`

const UList = styled.ul`
    display: flex;
    align-items: center;
`

const List = styled.li`
    margin-right: 30px;
    &:last-child{
        margin-right: 0;
    }
`
const ListButton = styled(List)`
    border: 1px solid black;
    padding: 10px 30px;
    border-radius: 5px;
`

