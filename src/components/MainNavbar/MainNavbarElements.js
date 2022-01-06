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
export const DropdownContent = styled.div `
background: #E5ECFA;
position: absolute;
border-radius: 5px;
top: 8rem;
right: 3rem;
width: 350px;
padding: 10px;
color: black;
overflow-y: scroll;
height: auto;
max-height: 50vh;
box-shadow: 3px 3px 10px 6px rgba(255, 255, 255, 0.06);
z-index: 1;
display: flex;
flex-direction: column;
`

export const DropdownItem = styled(Link) `
  color: #000615;
  text-decoration: none;
  padding: 15px;  
  cursor: pointer;
  transition: all 0.1s;

  img {
    height: 1rem;
    width: 1rem;
  }

  &:hover {
    background: grey;
    border-radius: 5px;
  }
`