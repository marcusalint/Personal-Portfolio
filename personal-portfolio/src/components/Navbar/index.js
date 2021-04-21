import React, {useEffect, useState} from 'react';
import { Router } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
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
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 120) {
      setScrollNav(true);
    } 
    else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const toggleBottom = () => {
    scroll.scrollToBottom()
  }


  return (
  <>
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo onClick={toggleHome}>ST</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="home"
            smooth={true} duration={500} spy={true} offset={-80} activeClass="active"
            >Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="projects"
            smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
            >Projects</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="About"
            smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
            >About</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
    
  </>
  )
}

export default Navbar
