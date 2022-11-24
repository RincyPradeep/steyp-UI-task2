import React from 'react'

import {Link,NavLink} from 'react-router-dom';
import styled from 'styled-components'


function Header() {    
  return (
    <Container>
        <Wrapper>
            <NavLeft>
                <Heading>
                    <Link to='/'>
                        <img src={require('../assets/images/casa_logo.svg').default} alt="logo" />
                    </Link>
                </Heading>
            </NavLeft>
            <NavMiddle>
                <UList>
                    <List >
                        <NavLink to='/' className={({isActive})=>isActive ? 'active' : undefined}>Home</NavLink>
                    </List>
                    <List >
                        <NavLink to='/services' className={({isActive})=>isActive ? 'active' : undefined}>Service offer</NavLink>
                    </List>
                    <List >
                        <NavLink to='/experience' className={({isActive})=>isActive ? 'active' : undefined}>Experience</NavLink>
                    </List>
                    <List >
                        <NavLink to='/projects' className={({isActive})=>isActive ? 'active' : undefined}>Projects</NavLink>
                    </List>
                    <List >
                        <NavLink to='/Contact' className={({isActive})=>isActive ? 'active' : undefined}>Contact</NavLink>
                    </List>
                </UList>
            </NavMiddle>
            <NavRight>
                <UList>
                    <SignIn><Link to='/signin'>Sign in</Link></SignIn>
                    <SignUp><Link to='/signup' className='button'>Sign up</Link></SignUp>
                </UList>           
            </NavRight>
        </Wrapper>
    </Container>
  )
}

export default Header


const Container = styled.div`
    height: 90px;
    font-weight:600;
    font-size: 18px;
    display: flex;
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
    padding-bottom: 5px;
    &:last-child{
        margin-right: 0;
    }
    a{
       &.active {
        font-size: 20px;
        border-bottom: 2px solid #000;
      } 
    }
`

const SignIn = styled.li`
    margin-right: 30px;
`

const SignUp = styled(List)`
    border: 1px solid black;
    padding: 10px 30px;
    border-radius: 5px;
`

