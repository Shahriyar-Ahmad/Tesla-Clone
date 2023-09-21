import React from 'react'
import styled from 'styled-components'
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
`
const SideMenu = styled.div`
a{
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;
 }
`
const CustomIcon = styled(MenuIcon)`
`