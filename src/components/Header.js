import React from 'react'

import {Link} from 'react-router-dom';
import styled from 'styled-components'


function Header({activeMenu}) {    
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
                    <List activeMenu={activeMenu} active="home">
                        <Link to='/'>Home</Link>
                    </List>
                    <List activeMenu={activeMenu} active="services">
                        <Link to='/services'>Service offer</Link>
                    </List>
                    <List activeMenu={activeMenu} active="experience">
                        <Link to='/experience'>Experience</Link>
                    </List>
                    <List activeMenu={activeMenu} active="projects">
                        <Link to='/projects'>Projects</Link>
                    </List>
                    <List activeMenu={activeMenu} active="contact">
                        <Link to='/Contact'>Contact</Link>
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
    border-bottom: ${({active,activeMenu})=>active===activeMenu && '2px solid #000'};
    font-size: ${({active,activeMenu})=>active===activeMenu && '20px'};
    &:last-child{
        margin-right: 0;
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

