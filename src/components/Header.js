import React, { useState } from 'react'

// styled components imports
import styled from 'styled-components'

// Icons imports
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Redux import
import { selectCars } from '../app/features/car/CarSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function Header() {
   const [burgerstatus, setBurgerStatus] = useState(false);
   const cars = useSelector(selectCars)
   return (
      <Container>
         <a>
            <img src='/images/logo.svg' alt='logo' />
         </a>
         <Menu>
            {
               cars && cars.map((car, index) => (
                  <a href='#' key={index}>{car}</a>
               ))
            }
         </Menu>
         <SideMenu>
            <a href='#'>Shop</a>
            <a href='#'>Tesla Account</a>
            <CustomIcon onClick={() => setBurgerStatus(true)} />
         </SideMenu>
         <BurgerNav show={burgerstatus}>
            <CloseWraper onClick={() => setBurgerStatus(false)}>
               <CloseBtn />
            </CloseWraper>
            {
               cars && cars.map((car, index) => (
                  <li key={index}><a href='#'>{car}</a></li>
               ))
            }
            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Used Inventory</a></li>
            <li><a href='#'>Trade-in</a></li>
            <li><a href='#'>Cybertruck</a></li>
            <li><a href='#'>Roadster</a></li>
            <li><a href='#'>Semi</a></li>
            <li><a href='#'>Charging</a></li>
            <li><a href='#'>Existing Inventory</a></li>
         </BurgerNav>
      </Container>
   )
}

export default Header

// Styled Components CSS

const Container = styled.div`
   min-height: 60px; 
   position: fixed;
   display: flex;
   align-items: center;
   padding: 0 20px;
   justify-content: space-between;
   top: 0; 
   right: 0;
   width: 100%;
   z-index:1;
`
const Menu = styled.div`
   display: flex;
   padding: 10px;
   align-items: center;
   justify-content: center;
   flex: 1;


   a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
   }
   @media (max-width : 768px){
    display: none;
   }
`
const SideMenu = styled.div`
    display: flex;
    align-items: center;
    a{
       font-weight: 600;
       text-transform: uppercase;
       margin-right: 10px;
     }
`
const CustomIcon = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
   background: white;
   width: 300px;
   position: fixed;
   padding: 20px;
   top: 0;
   bottom:0;
   right:0;
   z-index: 100;
   transition: transform .3s ease-in-out;
   transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
   li{
    list-style: none;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0, 0, .2);
    a {
      font-weight: 600;
    }
   }
`
const CloseWraper = styled.div`
    display: flex;
    justify-content: flex-end;
`
const CloseBtn = styled(CloseIcon)`
     cursor: pointer;
`