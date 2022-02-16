import React, {useState, useContext} from 'react'
import {Nav, NavbarContainer, NavMenu, NavItem, NavLink, SunTheme, MoonTheme, Dropdown, Arrdown, Arrup, Currency, CurrencySpan, User, UserName, UserDropdown,PortfolioLink} from './NavbarElements'
import Modal from '../Modal'
import {Context} from '../../context/coinMarketsContext';
import {UserContext} from '../../context/userDataContext';
import { getAuth, signOut, onAuthStateChanged } from '@firebase/auth';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  // const [showModal, setShowModal] = useState(false)
  // const [whichModal, setWhichModal] = useState('')
  const [theme, setTheme] = useState(true)
  const {whichCurrency, currency} = useContext(Context)
  const [isShown, setIsShown] = useState(false)
  const [email, setEmail] = useState('')
  const {isLoggedIn, setIsLoggedIn, logUserIn, showModal,
     setShowModal, whichModal, setWhichModal, openModal} = useContext(UserContext)

  const logout = () => {
      signOut(auth)
      logUserIn()
    }
    
  const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true)
        setEmail(user.email)
        // console.log(user.email)
      } else {
        setIsLoggedIn(false)
      }
    });
    
  function modulation(e) {
      openModal(e)
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
          {isLoggedIn ? 
            <>
              <User 
              onMouseEnter={() => setIsShown(true)}
              /> 
                {isShown &&
                  <UserDropdown 
                  onMouseLeave={() => setIsShown(false)}>
                    <UserName>{email}</UserName>
                    <PortfolioLink to='/portfolio'>Portfolio</PortfolioLink>
                    <p onClick={logout}>Logout</p>
                </UserDropdown>
                }
              </>
              :
              <>
                <NavItem>
                  <NavLink onClick={(e) =>
                    modulation(e)  
                    } name="login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={(e) =>
                    modulation(e)} name="signup">Sign Up</NavLink>
                </NavItem>
            </>
          }
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
