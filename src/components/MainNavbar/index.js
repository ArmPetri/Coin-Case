import React, {useState, useContext} from 'react'
import {MainNav, MainNavContainer, NavLogo, MainNavItem, MainNavLink, MainNavMenu, SearchBar, DropdownContent, DropdownItem} from './MainNavbarElements'
import { Context } from '../../context/coinMarketsContext'
import { CoinContext } from '../../context/coinPageContext'

const MainNavbar = () => {
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([]);

  const {coins} = useContext(Context)
  const {setCoinPageCoin} = useContext(CoinContext)

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
        <NavLogo to='/'></NavLogo>
        <MainNavMenu>
          <MainNavItem>
            <MainNavLink to='/'>Home</MainNavLink>
          </MainNavItem>
          <MainNavItem>
            <MainNavLink>Market</MainNavLink>
          </MainNavItem>
          <MainNavItem>
            <MainNavLink to='/coins'>Coins</MainNavLink>
          </MainNavItem>
          <MainNavItem>
            <MainNavLink to='/portfolio'>Portfolio</MainNavLink>
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
        <SearchBar type="text" placeholder="Search Coin" onChange={handleChange} 
      ></SearchBar>
        {filteredData.length != 0 && <DropdownContent>
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
