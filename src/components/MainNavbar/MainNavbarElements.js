import styled from 'styled-components'
import {Link} from 'react-router-dom'
import CoinCase from '../../images/CoinCase.svg'


export const MainNav = styled.nav `
  height: 72px;
  width: auto;
  border-bottom: 1px solid #E5ECFA;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainNavContainer = styled.div `
  height: 100%;
  width: 1166px;
  margin: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items:center;
`

export const NavLogo = styled.div `
  background: url(${CoinCase});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 165px;
  height: 35px;
  
  @media(max-width: 1024px) {
   width: 60%;
   height: 60% 
  }
`

export const MainNavMenu = styled.ul `
  display: flex;
  justify content: center;
  align-items:center;
  list-style: none;
  margin-right:25px;
`

export const MainNavItem = styled.li `
  padding-left:20px;
  cursor: pointer;
  color: #E5ECFA;
  font-size: 1.0625rem;
  // font-weight: bold;
  font-style: normal;
  line-height: 20px;
  // letter-spacing: 0.04rem;
`
export const MainNavLink = styled(Link) `
  color: #E5ECFA;
  text-decoration:none;
  transition: color ease-in 0.02s;

  &:hover {
    color: #4C7CE0;
  }

  @media(max-width: 1024px) {
    font-size: 0.7rem; 
   }
`

export const SearchBar = styled.input `
  width: 250px;
  height: 34px;
  background: #000615;
  color: #E5ECFA;
  border: 0.8px solid #E5ECFA;
  outline: none;
  box-sizing: border-box;
  border-radius: 5px;
  padding-left:20px;
  transition: border 0.2s ease-in;

  &:focus {
    border: 2px solid #0044D4; 
  }
`