import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {RiArrowDownSFill} from 'react-icons/ri'
import {RiArrowUpSFill} from 'react-icons/ri'
import { device } from '../../styles/mediaQueries'

export const Section = styled.section `
  width: 100vw;
  height: 100%
  overflow: hidden;
  margin-bottom: 50px;
`

export const SectionContainer = styled.div `
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction:column;
  justify-content: center
  align-items:center;

  @media ${device.xs} {
    min-width: 359px; 
    max-width: 500px;
    font-size: 0.875rem;
    overflow-x: hidden;
  }
  @media ${device.sm} {
    max-width: 536px;
  }
  @media ${device.md} {
    max-width: 730px;
    font-size: 1rem;
  }
  @media ${device.lg} {
    max-width: 930px;
  }
  @media ${device.xl} {
    min-width: 1166px;
  }
`

export const SectionTitle = styled.h1 `
  color: #E5ECFA;
  text-align:center;
  margin: 50px auto;

  @media ${device.xs} {
    font-size: 1rem;
  }
  @media ${device.sm} {
    font-size: revert;
  }
`

export const Utilities = styled.div `
  @media ${device.xs} {
    display; flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 1rem;
  }
  @media ${device.sm} {
    display: unset;
    margin: unset;
  }
`

export const SectionTable = styled.table `
  @media ${device.xs} {
    min-width: 355px;
    max-width: 500px;
    overflow-x: auto;
    margin: 0 .5rem;
  }
  @media ${device.sm} {
    max-width: 536px;
    overflow-x: hidden;
    margin: unset;
  }
  @media ${device.md} {
    max-width: 730px;
  }
  @media ${device.lg} {
    max-width: 930px;
  }
  @media ${device.xl} {
    min-width: 1166px;
  }
`

export const TableHead = styled.thead `
  border: 1px solid white;
  width: 100%
`

export const TableRow = styled.tr `
  border-top: 1px solid #E5ECFA;
  border-bottom: 1px solid #E5ECFA;
  height: 37px;
  background-color: #001B54;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const TableH = styled.th `
  color: rgba(229, 236, 250, 0.8);

  &:nth-child(1) {
    width: 20%;
  } 
  &:nth-child(2) {
    text-align:left;
  } 
  &:nth-child(3) {
    width: 30%;
  } 
  &:nth-child(4) {
    width: 30%;
  } 
  &:nth-child(5) {
    width: 30%;
  }

  @media ${device.xs} {
    &:nth-child(2) {
      width: 25%;
      text-align:center;
    }
    &:nth-child(5) {
      width: 50%;
      padding: none;
      display: none
    }
  }
  @media ${device.md} {
    &:nth-child(2) {
      width: 80%;
      text-align:left;
      text-indent: 3.5rem;
    }
    &:nth-child(5) {
      display: unset;
    }
  }
  @media ${device.lg} {
    &:nth-child(5) {
      width: 30%;
      // padding: 0 2.5rem;
    }
  }
`

export const TableBody = styled.tbody `
`

export const CurrencyButton = styled.div `
  width: auto;
  height: auto;
  display: inline-block;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  cursor: pointer;
  color: #E5ECFA;
  background: rgba(68, 212, 0, 0.61);
  text-align: center;

  &:hover {
    opacity: 0.9;
  }
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
  border-radius: 15%;
  text-align:center;
`

export const Arrdown = styled(RiArrowDownSFill) `
`

export const Arrup = styled(RiArrowUpSFill) `
`

export const Currency = styled.a `
  color: #E5ECFA;
  -moz-appearance:none; 
  -webkit-appearance:none; 
  appearance:none;
  padding: 10px;
  border: none;
`

export const CurrencySpan = styled.span `
padding: 5px;
width: 100%;

 &:hover {
  color: #4C7CE0;
 }
` 

export const PortfolioLink = styled(Link) `
  text-decoration:none;
  display.flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  padding: 0.6rem 1.3rem;
  border-radius: 5px;
  margin-left: 1rem;
  background-color: none;
  background-color: transparent;
  color: #E5ECFA;
  border: 1px solid #E5ECFA;
  align-items:center;
  vertical-align: middle;

  &:hover {
    opacity: 0.7;
  }
`

export const PortfolioStar = styled.img `
  position: relative;
  bottom:0.1rem;
  margin: auto;
  margin-right: 0.5rem;
  align-items:center;
  vertical-align: middle;
  align-items: center;
  justify-items:center;
`