import styled from 'styled-components'
import {RiArrowDownSFill} from 'react-icons/ri'
import {RiArrowUpSFill} from 'react-icons/ri'

export const Section = styled.section `
  width: 100vw;
  height: 100%
  overflow: hidden;
  margin-bottom: 50px;
`

export const SectionContainer = styled.div `
  height: 100%;
  width: 1166px;
  margin: 0 auto;
  display: flex;
  flex-direction:column;
  justify-content: center
  align-items:center;
`

export const SectionTitle = styled.h1 `
  color: #E5ECFA;
  text-align:center;
  margin: 50px auto;
`

export const Utilities = styled.div `
  margin-bottom: 1rem;
`

export const SectionTable = styled.table `
  
`

export const TableHead = styled.thead `
  width: 100%
`

export const TableRow = styled.tr `
  border-top: 1px solid #E5ECFA;
  border-bottom: 1px solid #E5ECFA;
  height:37px;
  background-color: #001B54;
  display:flex;
  justify-content: space-around;
  align-items:center;
`

export const TableH = styled.th `
  padding: 0 20px;
  color: rgba(229, 236, 250, 0.8);
  &:nth-child(1) {
    width: 20%;
  } 
  &:nth-child(2) {
    width: 90%;
    text-align:left;
    padding-left: 2.5rem;
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
`
export const TableBody = styled.tbody `

`

export const CurrencyButton = styled.div `
  display: inline-block;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  cursor: pointer;
  color: #E5ECFA;
  background: rgba(68, 212, 0, 0.61);

  &:hover {

    background: rgba(68, 212, 0, 0.51);
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
  // opacity: 0.9;
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

  &:hover {
    opacity: 0.8;
  }
`

export const CurrencySpan = styled.span `
  padding: 5px;
  width: 100%;

  &:hover {
    color: #4C7CE0;
  }
` 

export const PortfolioLink = styled.button `
  padding: 0.6rem 1.3rem;
  padding-left: 2.5rem;
  border-radius: 5px;
  margin-left: 1rem;
  background-color: none;
  background-color: transparent;
  color: #E5ECFA;
  border: 1px solid #E5ECFA;
  align-items:center;
  vertical-align: middle;
  position: relative;

  &:hover {
    opacity: 0.8;
  }
`

export const PortfolioStar = styled.img `
  position: absolute;
  left:1rem;
  margin-right: 0.5rem;
  align-items:center;
  vertical-align: middle;
`