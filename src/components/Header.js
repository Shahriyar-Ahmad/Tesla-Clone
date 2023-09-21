import React from 'react'

// styled imports
import styled from 'styled-components'

// Icons imports
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Container>
      {/* <b>G g h '</b> */}
      <a>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <Menu>
          <a href='#'>Model S</a>
          <a href='#'>Model 3</a>
          <a href='#'>Model X</a>
          <a href='#'>Model Y</a> 
      </Menu>
       <SideMenu>
          <a href='#'>Shop</a>
          <a href='#'>Tesla Account</a>
          <CustomIcon/>
       </SideMenu>
       <BurgerNav>
          <li><a href='#'>Model s</a></li>
          <li><a href='#'>Model 3</a></li>
          <li><a href='#'>Model X</a></li>
          <li><a href='#'>Model Y</a></li>
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
   width: 200px;
   position: fixed;
   padding: 20px;
   top: 0;
   bottom:0;
   right:0;
   z-index: 100;
   li{
    list-style: none;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0, 0, .2);
    a {
      font-weight: 600;
    }
   }
`