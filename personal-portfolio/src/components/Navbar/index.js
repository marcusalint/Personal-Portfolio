import React from 'react'
import { Router } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';


const Navbar = ({toggle}) => {
  return (
  <>
    <Nav>
      <NavbarContainer>
        <NavLogo to="/home">ST</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="/home">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/projects">Discover</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
    
  </>
  )
}

export default Navbar
