import React from 'react'


// Components
import Section from '../components/Section';

// Styled Componets
import styled from 'styled-components'


function Home() {
  return (
    <Container>
      <Section/>
      <Section/>
      <Section/>
      <Section/>
    </Container>
  )
}

export default Home

const Container = styled.div`
height :100vh;

`



 