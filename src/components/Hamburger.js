import React from 'react'

import styled from 'styled-components'


function Hamburger({open,setOpen}) {
  return (
    <Container onClick={()=>setOpen(!open)}>
        {
            open ?
            <img src={require("../assets/images/close.png")} alt="menu" /> :
            <img src={require("../assets/images/vector.svg").default} alt="menu" />
        }
    </Container>
  )
}

export default Hamburger


const Container = styled.div`
    img{
        width: 30px;
    }
`