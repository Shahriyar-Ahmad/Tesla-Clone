import React from 'react'

// Styled Component
import styled from 'styled-components'

// Animation imports
// import Fade from 'react-reveal/Fade';

function Section({ title, discrption, leftBtnText, rightBtnText, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{discrption}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnText}</LeftButton>
          {
            rightBtnText && <RightButton>{rightBtnText}</RightButton>
          }
        </ButtonGroup>
        <DownArrow src='/images/down-arrow.svg' />
      </Buttons>
    </Wrap>
  )
}

export default Section

// Styled components css

const Wrap = styled.div`
    width : 100vw;
    height : 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; // orizantal
    background-image: 
     ${props => `url('/images/${props.bgImage}')`};

`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const Buttons = styled.div`
    justify-items: center;
    text-align: center;
`
const ButtonGroup = styled.div`
   display: flex;
   margin-bottom: 30px;
   @media (max-width: 768px){
   flex-direction: column;
   }
`
const LeftButton = styled.div`
    background-color: rgb(23, 26, 32, 0.8);
    height : 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px; 

`
const RightButton = styled(LeftButton)`
    color: black;
    background-color:white;
    opacity: 0.65;
`
const DownArrow = styled.img`
   margin-top: 20px;
   height : 40px;
   overflow-x: hidden;
   animation: animateDown infinite 1.5s;
`
