import styled from 'styled-components'
import {FaSun} from 'react-icons/fa'
import {FaMoon} from 'react-icons/fa'
import {RiArrowDownSFill} from 'react-icons/ri'
import {RiArrowUpSFill} from 'react-icons/ri'


export const Nav = styled.nav `
  height: 60px;
  width: auto;
  border-bottom: 1px solid #E5ECFA;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NavbarContainer = styled.div `
  height: 100%;
  width: 1166px;
  margin: 0 100px;
  display: flex;
  justify-content: flex-end;
  align-items:center
`
export const NavMenu = styled.ul `
  display: flex;
  justify content: center;
  align-items:center;
  list-style: none;
  
`
export const NavItem = styled.li `
  padding-left:20px;
  cursor: pointer;
  color: #E5ECFA;

  &:last-of-type {
    padding-top: 0.2rem;
  }
`

export const NavLink = styled.a `
  color: #E5ECFA;
  text-decoration:none;
  transition: color ease-in 0.02s;

  &:hover {
    color: #4C7CE0;
  }
`
export const Currency = styled.a `
  color: #E5ECFA;
  -moz-appearance:none; 
  -webkit-appearance:none; 
  appearance:none;
  padding: 10px;
  border: none;

  &:hover {

    color: #4C7CE0;
  }
`

export const SunTheme = styled(FaSun) `
  color: #E5ECFA
  width: 80%;
  height: 80%;
`

export const MoonTheme = styled(FaMoon) `
  color: #E5ECFA
  width: 80%;
  height: 80%;
`

export const Dropdown = styled.div `
  width: 90px;
  height: 75px;
  position: absolute;
  border: 1px solid #E5ECFA;
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: center;
  align-items: center;
  background: #000615;
  // opacity: 0.9;
  border-radius: 15%;
  text-align:center;
`

export const CurrencySpan = styled.span `
  padding: 5px;
  width: 100%;

 &:hover {
  color: #4C7CE0;
 }
` 

export const Arrdown = styled(RiArrowDownSFill) `

`
export const Arrup = styled(RiArrowUpSFill) `

`