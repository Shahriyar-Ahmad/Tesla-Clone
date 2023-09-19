import React from 'react'


// Components
import Section from '../components/Section';

// Styled Componets
import styled from 'styled-components'


function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        discrption='Order Online for Touchless Delivery.'
        backgroundImg='model-s.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model Y'
        discrption='Order Online for Touchless Delivery.'
        backgroundImg='model-y.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model 3'
        discrption='Order Online for Touchless Delivery.'
        backgroundImg='model-3.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model X'
        discrption='Order Online for Touchless Delivery.'
        backgroundImg='model-x.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
          <Section
        title='Lowest Cost Solar Panels in America'
        discrption='Money-back guarantee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
          <Section
        title='Solar for New Roofs'
        discrption='Solar Roof Costs Less Then a New Roof Plus Solar Panels'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
          <Section
        title='Accessories'
        discrption=''
        backgroundImg='accessories.jpg'
        leftBtnText='Order now'

      />
    </Container>
  )
}

export default Home

const Container = styled.div`
height :100vh;

`



