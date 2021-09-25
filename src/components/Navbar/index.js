import React, {useState} from 'react'
import {Nav, NavbarContainer, NavMenu, NavItem, NavLink, Mode, Currency} from './NavbarElements'
import Modal from '../Modal'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  const [whichModal, setWhichModal] = useState('')

  const openModal = (e) => {
    setShowModal(prev => !prev);
    setWhichModal(e.target.name)
  }

  return (
    <>
    <Modal showModal={showModal} setShowModal={setShowModal} whichModal={whichModal} setWhichModal={setWhichModal}></Modal>
      <Nav>
      <NavbarContainer>
        <NavMenu>
          <NavItem>
            <Currency>
              <span>USD</span>
            </Currency>
          </NavItem>
          <NavItem>
            <NavLink onClick={openModal} name="login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={openModal} name="signup">Sign Up</NavLink>
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
