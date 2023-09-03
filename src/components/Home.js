import React from 'react'
import styled from 'styled-components';
import Section from './Section';


const Home = () => {
  return (
    <Container>

       <Section
        title = "Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Customer order"
        rightBtnText="Existing inventory"
       />
      
      <Section
        title = "Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Customer order"
        rightBtnText="Existing inventory"
       />
       
       <Section
         title = "Model S"
         description="Order Online for Touchless Delivery"
         backgroundImg="model-S.jpg"
         leftBtnText="Customer order"
         rightBtnText="Existing inventory"
         />
       
       
       <Section
        title = "Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Customer order"
        rightBtnText="Existing inventory"
       />
       <Section
        title = "Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Customer order"
        rightBtnText="Existing inventory"
       />
       <Section
        title = "Solar Roof"
        description="Produce Clean Energy
        From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Customer order"
        rightBtnText="Existing inventory"
       />
       <Section
        title = "Accessories"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
        
       />

    </Container>
  )
}

export default Home

const Container = styled.div`
   height:100vh;
   
`