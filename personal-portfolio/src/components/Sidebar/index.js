import React from 'react'
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active" onClick={toggle}>
            Projects
          </SidebarLink>
            <SidebarLink to="About" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active" onClick={toggle}>
            About
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SideBarContainer>
  )
}

export default SideBar
