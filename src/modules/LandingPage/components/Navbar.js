import React, { useState } from 'react'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavbarText } from 'reactstrap'

import { logo, searchIcon } from '../../../assets/images'

const NavBar = (props) => {
  const { handleSignupToggle, handleLoginToggle } = props
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavbarText>
                <img className="search-icon" src={searchIcon} alt="search icon" />
              </NavbarText>
            </NavItem>
            <NavItem>
              <NavbarText>
                <i className="far fa-bell" />
              </NavbarText>
            </NavItem>
            <NavItem>
              <NavbarText onMouseDown={() => handleSignupToggle()}>Signup</NavbarText>
            </NavItem>
            <NavItem>
              <NavbarText onMouseDown={() => handleLoginToggle()}>
                Login
                <i className="fas fa-ellipsis-v" />
              </NavbarText>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
