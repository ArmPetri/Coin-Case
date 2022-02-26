import styled from 'styled-components'
import { device } from '../../styles/mediaQueries'

export const Section = styled.section `
  width: 100vw;
  height: 100%
  overflow: hidden;
  margin-bottom: 50px;
  // border: 1px solid green;
`

export const SectionContainer = styled.div `
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction:column;
  justify-content: center
  align-items:center;

  @media ${device.xs} {
    font-size: 0.875rem;
    min-width: 330px; 
    max-width: 500px;
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
`

export const Utilities = styled.div `
  margin-bottom: 1rem;
  width: 100%;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 0;
`

export const Cards = styled.div `
  height: 100%;
  
  @media ${device.xs} {
    margin: auto;
    width: 95%;
    
    div:nth-of-type(1) {
      grid-area: total;
      font-size: 1.2rem;
    }
    div:nth-of-type(2){
      grid-area: change;
      font-size: 0.875rem;
    }
    div:nth-of-type(3) {
      grid-area: profit;
      font-size: 0.875rem;
    }

    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "total total"
    "change profit"
  }
  @media ${device.sm} {
    width: 100%;
  }
  @media ${device.lg} {
    margin: unset;
    display: flex;
    width: unset;
    flex-direction: row;
    justify-content: space-between;

    &:nth-of-type(1) {
      align-self: flex-start;
    }
    &:nth-of-type(2) {
      display: flex;
      align-self: flex-end;
    }
    div:nth-of-type(1) {
      width: unset;
    }
    div:nth-of-type(2), div:nth-of-type(3) {
      width: unset;
    }
  }
`

export const SectionTable = styled.table `
  @media ${device.xs} {
    min-width: 330px;
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
  width: 100%
`

export const TableRow = styled.tr `
  border-top: 1px solid #E5ECFA;
  border-bottom: 1px solid #E5ECFA;
  height:37px;
  background-color: #001B54;
  display:flex;
  align-items:center;

  @media ${device.xs} {
    justify-content: space-around;
  } 
  @media ${device.lg} {
    justify-content: center;
  } 
`

export const TableH = styled.th `
  color: rgba(229, 236, 250, 0.8);
  text-align:center;

  @media ${device.xs} {
    &:nth-child(1) {
      width: 10%;
    } 
    &:nth-child(2) {
      width: 20%;
    }
    &:nth-child(3) {
      width: 20%;
    }   
    &:nth-child(4) {
      display: none;
    } 
    &:nth-child(5) {
      display: none;
    }
    &:nth-child(6) {
      width: 20%;
    }
    &:nth-child(7) {
      width: 25%;
    }
  }
  @media ${device.md} {
    &:nth-child(1) {
      width: 10%;
    }   
    &:nth-child(4) {
      width: 15%;
    } 
    &:nth-child(5) {
      display: unset;
      width: 30%;
    }
  }
  @media ${device.lg} {
    &:nth-child(1) {
      width: 20%;
    } 
    &:nth-child(2) {
      width: 35%;
      text-align:center;
    } 
    &:nth-child(4) {
      display: unset;
    } 
    &:nth-child(7) {
      width: 20%;
      padding-right: 1rem;
    }
  } 
  @media ${device.xl} {
    &:nth-child(2) {
      width: 50%
    } 
  } 
`
export const TableBody = styled.tbody `
  width: 100%;
`