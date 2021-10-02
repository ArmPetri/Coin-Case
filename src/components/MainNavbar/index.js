import React from 'react'
import {MainNav, MainNavContainer, NavLogo, MainNavItem, MainNavLink, MainNavMenu, SearchBar} from './MainNavbarElements'

const MainNavbar = () => {

  return (
    <MainNav>
      <MainNavContainer>
        <NavLogo></NavLogo>
        <MainNavMenu>
          <MainNavItem>
            <MainNavLink to='/' >Home</MainNavLink>
          </MainNavItem>
          <MainNavItem>
            <MainNavLink>Market</MainNavLink>
          </MainNavItem>
          <MainNavItem>
            <MainNavLink>Portfolio</MainNavLink>
          </MainNavItem>
          <MainNavItem>
            <MainNavLink>Alerts</MainNavLink>
          </MainNavItem>
          <MainNavItem>
            <MainNavLink>News</MainNavLink>
          </MainNavItem>
          <MainNavItem>
            <MainNavLink to='/converter'>Converter</MainNavLink>
          </MainNavItem>
          <MainNavItem>
            <MainNavLink>Market Analysis</MainNavLink>
          </MainNavItem>
        </MainNavMenu>
      <SearchBar></SearchBar>
      </MainNavContainer>
    </MainNav>
  )
}

export default MainNavbar
