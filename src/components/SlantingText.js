import React from 'react'

import styled from 'styled-components'


function SlantingText({text}) {
  return (
    <Text>{text}</Text>
  )
}

export default SlantingText


const Text = styled.span`
    display: inline-block;
    margin-bottom: 20px;
    color: #8873EF;
    transform: rotate(-35deg);
`