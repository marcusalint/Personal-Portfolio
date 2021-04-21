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
          <SidebarLink to="/home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/projects" onClick={toggle}>
            Projects
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SideBarContainer>
  )
}

export default SideBar
