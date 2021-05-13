import React, { useState } from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Input,
  Badge,
} from 'reactstrap'
import TopnavNotifications from './Topnav.Notifications'

import { logo, searchIcon, dummyUser1 } from '../../../../assets/images'

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar light expand="md" className="sticky-top">
      <NavbarBrand href="/">
        <img src={logo} alt="logo" />
      </NavbarBrand>
      <NavbarText className="search__container">
        <div className="search">
          <span className="search__icon" onClick={(e) => {}}>
            <img className="search__icon-img" src={searchIcon} alt="search icon" />
          </span>
          <Input
            name="searchKeyword"
            id="searchKeyword"
            className="search__input"
            placeholder="Search for anything here"
            onChange={(e) => {}}
            onKeyPress={(e) => {}}
          />
        </div>
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavbarText>
              <i class="icon far fa-comment-alt"></i>
              <Badge className="badge-float" color="danger" pill>
                1
              </Badge>
            </NavbarText>
          </NavItem>
          <NavItem>
            <TopnavNotifications />
          </NavItem>
          <NavItem>
            <UncontrolledDropdown>
              <DropdownToggle className="p-0 center-content" color="empty">
                <span className="avatar-container">
                  <img src={dummyUser1} alt="user avatar" />
                </span>
                <span className="name d-none d-lg-block mr-1">Tim Kamau</span>
                <span>
                  <i className="fas d-none d-lg-block fa-ellipsis-v" />
                </span>
              </DropdownToggle>
              <DropdownMenu className="mt-3 align-items-start" right>
                <DropdownItem>Admin Role</DropdownItem>
                <DropdownItem>Account</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => window.location.replace('/')}>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default TopNav
