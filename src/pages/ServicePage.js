import React,{useEffect} from 'react'

import styled from 'styled-components'


function ServicePage({setActiveMenu}) {

  useEffect(()=>{
    setActiveMenu("services")
  },[])

  return (
    <Container>
        <h5>Service Offer Page</h5>
    </Container>
  )
}

export default ServicePage

const Container = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`