import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { device } from '../../styles/mediaQueries'
import {RiArrowDownSFill} from 'react-icons/ri'
import {RiArrowUpSFill} from 'react-icons/ri'
import {FaUserAlt} from "react-icons/fa";
import CoinCase from '../../images/CoinCase.svg'

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
  display: flex;
  align-items:center;
  position:relative;

  @media ${device.xs} {
    justify-content: space-around;
  }
  @media ${device.lg} {
    justify-content: flex-end;
    margin: 0 100px;
  }
`
export const NavMenu = styled.ul `
  display: flex;
  justify content: center;
  align-items:center;
  list-style: none;
`
export const NavItem = styled.li `
  cursor: pointer;
  color: #E5ECFA;

  &:last-of-type {
    padding-top: 0.2rem;
  }

  @media ${device.xs} {
    &:last-of-type {
      display:none;
    }
  }
  @media ${device.sm} {
    padding-left:20px;
  }
`

export const NavLink = styled.a `
  color: #E5ECFA;
  text-decoration:none;
  transition: color ease-in 0.02s;
  font-size: .8;

  &:hover {
    color: #4C7CE0;
  }

  &:nth-of-type(1) {
    margin: 0 .5rem;
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

  @media ${device.xs} {
    display: none;
  }
  @media ${device.sm} {
    display: initial;
  }
`

export const User  = styled(FaUserAlt) `
  color: #E5ECFA;
  margin:0.5rem;

  &:hover {
    color: #4C7CE0;
  }
`

export const Dropdown = styled.div `
  position: absolute;
  border: 1px solid #E5ECFA;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  background: #000615;
  border-radius: 15%;
  text-align:center;
  z-index: 2;
`
export const UserDropdown = styled.div `
  position: absolute;
  top: 3rem;
  right: 2rem;
  border: 0.1rem solid #E5ECFA;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  justify-content: space-around;
  align-items: start;
  background: #000615;
  border-radius: 8px;
  z-index: 3;

  p {
    color:#E5ECFA;
    font-size:1rem;
    padding-top: 2px;
    margin-top: 2px;

    &:hover {
      color: #4C7CE0;
      cursor:pointer;
    }
  }
`

export const UserName = styled.span `
  color: rgba(178,198,242,0.69);
  font-size:1rem;
  padding-top: 2px;
  margin-top: 2px;
  padding-bottom: 5px;
  margin-bottom: 5px;
`

export const PortfolioLink =styled(Link)`
  color:#E5ECFA;
  font-size:1rem;
  text-decoration:none;

  &:hover {
    color: #4C7CE0;
    cursor:pointer;
  }
`

export const CurrencySpan = styled.span `
  padding: 2px;
  width: 100%;

  &:hover {
  color: #4C7CE0;
  }
` 

export const Arrdown = styled(RiArrowDownSFill) `
`
export const Arrup = styled(RiArrowUpSFill) `
`

export const Hamburger = styled.div `
  width: 2rem;
  height: 2rem;
  text-align:center;
  flex: direction: column;
  justify-content: center;
  align-items: center;

  span {
    display: block;
    width: 20px;
    height: .5rem;
    border-bottom: 2px solid #E5ECFA;
    margin: auto;
  }
  span:nth-of-type(1) {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }
  span:nth-of-type(2) {
    transition: transform 0.2s ease-in-out;
  }
  span:nth-of-type(3) {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  @media ${device.lg} {
    display: none;
  }
`

export const SpanOn = styled.span `
`

export const NavLogo = styled(Link) `
  @media ${device.xs} {
    background: url(${CoinCase});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 30%;
    height: 25px;
  }

  @media ${device.lg} {
    display: none;
  }
`