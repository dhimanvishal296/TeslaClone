import { Container } from '@mui/system'
import React from 'react'
import Section from './Section'
import styled from 'styled-components';

const ModelS = () => {
  return (
    <Containers>
       <Section
         title = "Model S"
         description="Order Online for Touchless Delivery"
         backgroundImg="model-S.jpg"
         leftBtnText="Customer order"
         rightBtnText="Existing inventory"
         />
    </Containers>
  )
}

export default ModelS

const Containers = styled.div`
   height:100vh;
   width:100vw;
`


