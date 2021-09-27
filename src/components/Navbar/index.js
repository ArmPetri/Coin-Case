import React, {useState} from 'react'
import {Nav, NavbarContainer, NavMenu, NavItem, NavLink, SunTheme, MoonTheme, Dropdown, Arrdown, Arrup, Currency, CurrencySpan} from './NavbarElements'
import Modal from '../Modal'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [currency, setCurrency] = useState('USD')
  const [showModal, setShowModal] = useState(false)
  const [whichModal, setWhichModal] = useState('')
  const [theme, setTheme] = useState(true)

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
          <Currency onClick={() => {
              setOpen(!open)
            }}>
              <span>{currency}</span>
              {!open ? <Arrdown/> : <Arrup/>}
            </Currency>
            {open && <Dropdown>
              <CurrencySpan onClick = {() => setCurrency('USD')}>USD</CurrencySpan>
              <CurrencySpan onClick = {() => setCurrency('EUR')}>EUR</CurrencySpan>
            </Dropdown>}
            
          </NavItem>
          <NavItem>
            <NavLink onClick={openModal} name="login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={openModal} name="signup">Sign Up</NavLink>
          </NavItem>
          <NavItem>
            {theme ? <MoonTheme onClick={()=>setTheme(!theme)}/> : <SunTheme onClick={()=>setTheme(!theme)}/>}
          </NavItem>
        </NavMenu> 
      </NavbarContainer>
    </Nav>
      
      </>
  )
}

export default Navbar
