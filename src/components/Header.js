import React,{useState,useEffect} from 'react'

import {Link,NavLink} from 'react-router-dom';
import styled from 'styled-components'
import Hamburger from './Hamburger';


function Header() {    

    const [open,setOpen] = useState(false)
    const [showBg, setShowBg] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowBg(true);
            } else setShowBg(false);
        });

        return () => {
            window.removeEventListener("scroll",null);
        }
    }, [])

  return (
    <Container className={showBg && "nav-bg"}>
        <Wrapper>
            <NavLeft>
                <Heading>
                    <Link to='/'>
                        <img src={require('../assets/images/casa_logo.svg').default} alt="logo" />
                    </Link>
                </Heading>
            </NavLeft>

            <NavRight className={open ? 'mobile-menu-link' : 'menu-link'}>
                <UList onClick={()=>setOpen(false)}>
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
                            
                    <List className='signin-btn'><Link to='/signin'>Sign in</Link></List>
                    <List className='signup-btn'><Link to='/signup'>Sign up</Link></List>
                </UList>        
            </NavRight>

            <HamburgerMenu>
                <Hamburger open={open} setOpen={setOpen} />
            </HamburgerMenu>   
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
    position: fixed;
    width: 100%;
    z-index:99;
    background-color: #fff;
    &.nav-bg{
        background-color: #f6f8f4;
    }
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

        @media all and (max-width:1280px){
            a{
                img{
                    width: 80%;
                }
            }
        }
`

const NavRight=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media all and (max-width:980px){
        &.menu-link{
            display: none;
        }
        &.mobile-menu-link{
            position: fixed;
            right: 0;
            top: 90px;
            background-color:#e7e7e7;
            width: 250px;
            z-index: 99;
            display: block;
            padding: 20px;
            box-shadow: 0px 4px 31px rgba(0,0,0,0.15);                       
        }       
    }
`

const UList = styled.ul`
    display: flex;
    align-items: center;

    @media all and (max-width:980px){
        flex-direction: column;
        
    }
`

const List = styled.li`
    margin-right: 20px;
    padding-bottom: 5px;
    &:last-child{
        margin-right: 0;
    }
    &.signin-btn{
        margin-left:120px;
    }
    &.signup-btn{
        border: 1px solid black;
        padding: 10px 30px;
        border-radius: 5px;
    }
    a{
       &.active {
        font-size: 20px;
        border-bottom: 2px solid #000;
      } 
    }
    
    @media all and (max-width:1280px){
        font-size: 16px;
        a{
            &.active{
                font-size: 18px;
            }
        }
    }
    @media all and (max-width:980px){
        margin-right: 0;
        margin-bottom: 20px;
        width: 100%;
        &:last-child{
            margin-bottom: 0;
        }
        &.signin-btn{
            margin-left: 0;
        }
        &.signup-btn{
            border: none;
            padding: 0;
        }
    }
`


const HamburgerMenu = styled.div`
    display: none;

    @media all and (max-width:980px){
        display: block;
        position: absolute;
        right: 5%;
    }
`
