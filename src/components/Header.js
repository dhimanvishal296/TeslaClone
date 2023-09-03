import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (

    <Container>
      <LeftMenu>
        <img src="/images/logo.svg" alt="logo" />
      </LeftMenu>
      <Menu>
        <li>  
          <Link to="/Model3"> Model 3 </Link>
        </li>
        <li>
          <Link to="/ModelS"> Model S </Link>
        </li>
        <li>
          <Link to='/ModelX'> Model X</Link>
        </li>
        <li>
          <Link to="/ModelY"> Model Y</Link>
        </li>
        <li>
          <Link to='/solarRoof'> Solar Roof</Link>
        </li>
        <li>
          <Link to='/tesla-Solar'>Solar Panel</Link>
        </li>


      </Menu>
      <RightMenu>
        <a href="/shop">Shop</a>
        <a href="/Account">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrap>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrap>
        <li><Link to="/ModelS"> Model S </Link></li>
        <li> <Link to='/ModelX'> Model X</Link></li>
        <li><Link to="/Model3"> Model 3 </Link></li>
        <li><a href="/M">Model Y</a></li>
        <li><a href="/S">Solar Roof</a></li>
        <li><a href="/Solar Panels">Solar Panels</a></li>
        <li><a href="/Existing Inventory">Existing Inventory</a></li>
        <li><a href="/Used">Used Inventory</a></li>
        <li><a href="/Trade-in">Trade-in</a></li>
        <li><a href="/Cyber-truck">Cyber Truck</a></li>
        <li><a href="/Insurence">Insurence</a></li>
        <li><a href="/tesla-Powerwall">Powerwall</a></li>
        <li><a href="/Charging">Charging</a></li>
        <li><a href="/findUs">Find Us</a></li>
        <li><a href="/tesla-support">Support</a></li>


      </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
  justify-content:space-between;
  z-index:1;
  
  
  
`
const LeftMenu = styled.div`
min-inline-size: 150px;
align-items:center;
`
const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
  @media(max-width:768px){
    display:none;

  }

   li {
    font-weight:600;
    cursor:pointer;
    text-transform:capitalize;
    padding:4px 15px;
    flex-wrap:nowrap;
    list-style:none;
  
  }
  li:hover{
    background:#0000000d;
    border-radius:3px;
  } 
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  font-weight:600;
  cursor:pointer;
  text-transform:capitalize;
  padding:0 15px;
  flex-wrap:nowrap;
  
  a:hover{
    background:#0000000d;
    border-radius:5px;
  } 
   
}
`
const CustomMenu = styled(MenuIcon)`
  cursor:pointer;


`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
list-style:none;
 padding: 2.5rem 25px;
display:flex;
flex-direction:column;
justify-content:flex-start;
text-align:start;
overflow-y:auto;
transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: all 0.3s linear;

li{
  padding:10px 0;
  font-weight:500;
  // border-bottom:1px solid rgba(0,0,0, 0.2);
 
        a{
          padding:0 20px;
          font-weight:550;
          font-size:14px;
          display:block;
          cursor:pointer;
         }
} 
li:hover{
  background:#0000000d;
  border-radius:5px;
} 
`
const CustomClose = styled(CloseIcon)`
   cursor:pointer;
`
const CloseWrap = styled.div`
display:flex;
justify-content:flex-end;
position:fixed;
right:0.9rem;
top:1.7rem;
`
