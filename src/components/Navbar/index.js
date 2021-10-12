import React, {useState, useContext} from 'react'
import {Nav, NavbarContainer, NavMenu, NavItem, NavLink, SunTheme, MoonTheme, Dropdown, Arrdown, Arrup, Currency, CurrencySpan} from './NavbarElements'
import Modal from '../Modal'
import {Context} from '../../context/coinMarketsContext';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [whichModal, setWhichModal] = useState('')
  const [theme, setTheme] = useState(true)
  const {whichCurrency, currency} = useContext(Context)

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
               <span>{(currency).toUpperCase()}</span>
              {!open ? <Arrdown/> : <Arrup/>}
            </Currency>
            {open && <Dropdown>
              <CurrencySpan onClick = {() => whichCurrency('usd')}>USD</CurrencySpan>
              <CurrencySpan onClick = {() => whichCurrency('eur')}>EUR</CurrencySpan>
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
