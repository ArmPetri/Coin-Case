import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaSun} from 'react-icons/fa'

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
`

export const NavLink = styled(Link) `
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
  // background: none;
  // background: ([RiArrowDownSFill]);
  border: none;


  &:hover {

    color: #4C7CE0;
  }

  
`


export const Mode = styled(FaSun) `
  color: #E5ECFA
`

export const Dropdown = styled.div `
  width: 50px;
  height: 50px;
  position: absolute;
  border: 1px solid #E5ECFA;
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: center;
  align-items: center;
  background: grey;
  // opacity: 0.9;
  border-radius: 15%;
  text-align:center;
`
export const CurrencySpan = styled.span `
  padding: 5x;
  width: 100%;



   &:hover {
    color: #4C7CE0;
    // background: white;
    width: 50px;
    height:25px;
    border-radius 5px;
   }
` 