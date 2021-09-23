import React from 'react'

import {Nav, NavbarContainer, NavMenu, NavItem, NavLink, Mode, Currency} from './NavbarElements'

const Navbar = () => {

  return (
    <>
      <Nav>
      <NavbarContainer>
        <NavMenu>
          <NavItem>
            <Currency>
              <span>USD</span>
            </Currency>
          </NavItem>
          <NavItem>
            <NavLink>Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Sign Up</NavLink>
          </NavItem>
          <NavItem>
            <Mode></Mode>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
    </>
  )

}

export default Navbar
