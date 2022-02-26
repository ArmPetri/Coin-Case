import styled from 'styled-components'
import {Link} from 'react-router-dom'
import CoinCase from '../../images/CoinCase.svg'
import {IoClose} from 'react-icons/io5';
import { device } from '../../styles/mediaQueries'

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
  display: flex;
  justify-content: space-between;
  align-items:center;

  @media ${device.xs} {
    margin: 0 10%;
  }
  @media ${device.lg} {
    margin: 0 100px;
    position: relative;
  }
  @media ${device.lg} {
    position: relative;
  }
`

export const NavLogo = styled(Link) `
  background: url(${CoinCase});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  
  @media ${device.xs} {
    width: 165px;
    height: 35px;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
  @media ${device.lg} {
      margin: unset;
      margin-right: 2rem;
      width: 165px;
      height: 35px;
  }
`

export const MainNavMenu = styled.ul `
  justify content: space-around;
  align-items:center;
  list-style: none;
  width: 70%;

  @media ${device.xs} {
    display:flex;
    flex-direction: column;
    position: absolute;
    height: 100vh;
    width: 100vw;
    transition: transform 0.5s ease-in-out;
    left: 0;
    transform: translateX(${props => props.position});
    top: 0;
    background: #000615;
    z-index: 4;
  }
  @media ${device.md} {
    width: 40vw;
    z-index: initial;
  }
  @media ${device.lg} {
    height: auto;
    display: flex;
    flex-direction: row;
    position: static;
    width: 70%;
    background: none;
    transform: translateX(0);
  }
`

export const CloseBtn = styled(IoClose) `
  @media ${device.xs} {
    color: rgba(229, 236, 250, 0.5);
    height: 25px;
    width: 25px;
    cursor: pointer;
    margin-top: 1rem;
    margin-left: 18rem;
  }
  @media ${device.lg} {
    display:none;
  }
`

export const MainNavItem = styled.li `
  cursor: pointer;
  color: #E5ECFA;
  font-style: normal;
  line-height: 20px;

  @media ${device.xs} {
    width: 100%;
    height: 2.5rem;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items:center;

    &:hover {
      color: #4C7CE0;
      background: rgba(0, 27, 84, 0.59)
    }
  }
  @media ${device.lg} {
    display: static;
    margin-top: unset;
    padding-left:20px;
    width: auto;

    &:hover {
      background: none;
    }
  }
`
export const MainNavLink = styled(Link) `
  color: #E5ECFA;
  text-decoration:none;
  transition: color ease-in 0.02s;

  &:hover {
    color: #4C7CE0;
  }

  @media ${device.xs} {
    width: 100%;

    &:hover {
      color: #4C7CE0;
    }
  }
  @media ${device.lg} {
    font-size: 1.0625rem;
  }
`

export const SearchBar = styled.input `
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

  @media ${device.xs} {
    width: 100%;
  }
  @media ${device.lg} {
    width: 250px;
  }
`

export const DropdownContent = styled.div `
  background: #E5ECFA;
  position: absolute;
  border-radius: 5px;
  padding: 10px;
  color: black;
  overflow-y: scroll;
  height: auto;
  max-height: 50vh;
  box-shadow: 3px 3px 10px 6px rgba(255, 255, 255, 0.06);
  z-index: 1;
  display: flex;
  flex-direction: column;

  @media ${device.xs} {
    width:auto;
    top:8rem;
  }
  @media ${device.xs} {
    width: 50%;
  }
  @media ${device.md} {
    top: 8rem;
    width: 350px;
  }
  @media ${device.lg} {
    top:4rem;
    right: 0;
  }
  @media ${device.xl} {
    top:4rem;
    right: 0;
  }
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