import React, {useState, useContext} from 'react'
import {MainNav, MainNavContainer, NavLogo, MainNavItem, MainNavLink, MainNavMenu, SearchBar, DropdownContent, DropdownItem, CloseBtn} from './MainNavbarElements'
import { Context } from '../../context/coinMarketsContext'
import { CoinContext } from '../../context/coinPageContext'
import { HamburgerContext } from '../../context/hamburgerContext'

const MainNavbar = () => {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([]);

  const {coins} = useContext(Context)
  const {setCoinPageCoin} = useContext(CoinContext)
  const {hamburger, setHamburger} = useContext(HamburgerContext)

  const handleChange = e => {
    const searchCoin = e.target.value;
    setSearch(searchCoin)
    const newFilter = coins.filter((value) => {
      return value.name.toLowerCase().includes(search.toLowerCase());
    })

    if (searchCoin === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }

  return (
    <MainNav>
      <MainNavContainer>
          <MainNavMenu position={hamburger ? "0" : "-100%"}>
            <CloseBtn onClick={() => setHamburger(false)}></CloseBtn>
            <NavLogo to='/' onClick={() => setHamburger(false)}></NavLogo>
            <MainNavItem onClick={() => setHamburger(false)}>
              <MainNavLink to='/' >Home</MainNavLink>
            </MainNavItem>
            <MainNavItem onClick={() => setHamburger(false)}>
              <MainNavLink to='/coins'>Coins</MainNavLink>
            </MainNavItem>
            <MainNavItem onClick={() => setHamburger(false)}>
              <MainNavLink to='/portfolio'>Portfolio</MainNavLink>
            </MainNavItem>
            <MainNavItem onClick={() => setHamburger(false)}>
              <MainNavLink to='/converter'>Converter</MainNavLink>
            </MainNavItem>
          </MainNavMenu>
      <SearchBar type="text" placeholder="Search Coin" onChange={handleChange} 
      ></SearchBar>
              {filteredData.length !== 0 && <DropdownContent>
                { filteredData.map((value) => {
                  return <DropdownItem to='/coins' onClick={() => {
                    setCoinPageCoin(value.id)
                    setFilteredData([])
                  }}>{value.name}</DropdownItem>
                  })
                }
              </DropdownContent>
              }
      </MainNavContainer>
    </MainNav>
  )
}

export default MainNavbar
