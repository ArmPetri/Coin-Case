import styled from 'styled-components'
import { device } from '../../styles/mediaQueries'

export const Section = styled.section `
  width: 100vw;
  height: 100%;
  overflow: hidden;
  margin-bottom: 50px;
`

export const SectionContainer = styled.div `
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items:stretch;

  @media ${device.xs} {
    flex-direction:column;
    justify-content: center;
    align-items:center;
    width: 100vw;
  }
  @media ${device.lg} {
    max-width: 930px;
    min-height: 100%;
    flex-direction:row;
    height: 500px;
  }
  @media ${device.xl} {
    max-width: 1166px;
    min-height: 100%;
  }
`

export const SectionTitle = styled.h1 `
  color: #E5ECFA;
  text-align:center;
  margin: 50px auto;
`

export const DataContainer = styled.div `
  color: #E5ECFA;
  background: linear-gradient(0deg, rgba(0, 13, 42, 0.69), rgba(0, 13, 42, 0.69)), #E5ECFA;
  border-radius: 5px;
  height: 518px;
  height: 100%;

  @media ${device.xs} {
    min-width: 359px; 
    max-width: 500px;
    font-size: 0.875rem;
    overflow-x: hidden;
    width: 90vw;
    padding: 1rem 1rem;
    
    &:nth-of-type(1) {
      margin-bottom: 2rem;
    }
  }
  @media ${device.sm} {
    max-width: 536px;
  }
  @media ${device.md} {
    max-width: 730px;
    font-size: 1rem;
  }
  @media ${device.lg} {
    padding: 3.75rem 1.875rem;

    &:nth-of-type(1) {
      margin-bottom: 0;
      width: 58%;
      margin: 0 1rem;
    }
    &:nth-of-type(2) {
      width: 38%;
      height: 100%;
      margin: none;
    }
  }
  @media ${device.xl} {
    margin: auto;
  }
`

export const DataContainerRow = styled.div `
  display: flex;
  flex-direction: column;

  @media ${device.xs} {
   &:nth-of-type(2) {
      width: 100%;
    }
    &:nth-of-type(3) {
      flex-direction: column;
    }  
  }
  @media ${device.sm} {
    nth-of-type(3) {
      flex-direction: row;
    }  
  }
  @media ${device.lg} {
    &:nth-of-type(2) {
      flex-direction: row;
    }
    &:nth-of-type(3) {
    flex-direction: row;
    }  
  }
`

export const DataSection = styled.div `
  font-size: 0.85rem;

  div {
    border-bottom: 1px solid #E5ECFA;
  }

  @media ${device.xs} {
    width:100%;
    margin-right: 1rem;
  }
  @media ${device.lg} {
    width:50%;

    &:nth-of-type(1) {
      border-right: 1px solid #E5ECFA;
      padding-right: 1rem;
      margin-right: 1rem;
      }
    }
`

export const DataContainerTitle = styled.h2 `
  padding-bottom: 1rem;

  &:nth-of-type(2) {
    display: inline;
    margin-bottom: 1rem;
  }
`

export const Text =styled.p `
  color: ${props => props.type};

  &:nth-of-type(1) {
    display: inline;
    margin-left: 1rem;
    height: 100%;
  }
`

export const DataRow = styled.div `
  display: flex;
  justify-content: space-between;
  padding: .5rem;
  width: 100%;
`

export const DataName = styled.p `
`

export const DataValue = styled.p `
  font-weight: bold;
`

export const DataPriceSection = styled.div `
  font-size: 0.85rem;
  padding: 0.5rem;
  
  @media ${device.xs} {
    width: 100%;
    margin: 0 auto;
  }
  @media ${device.sm} {
    width: 70%;
  }
  @media ${device.lg} {
    width:50%;
 }
`

export const DataPrice = styled.div `
  margin: 0 auto;
  display:flex;
  justify-content:space-between;
`

export const TimeFrame = styled.button `
  color: rgba(0, 13, 42, 0.69);
  background: #E5ECFA;
  width: 2.5rem;
  height: 2.125rem;
  border: none;
  transition: all 0.15s ease-in-out;

  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }
  &:last-of-type {
    border-radius: 0 5px 5px 0;
    margin-right: 0;
  }
  &:focus {
    background: #000D2A;
    color: #E5ECFA;
    border: none;
    transform: scale(0.96);
  }
  &:hover {
    transform: scale(0.95);
  }
`

export const TimeFramePrice = styled.p `
  background: #E5ECFA;
  height: 2.125rem;
  color: ${props => props.type};
  border-radius: 5px;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`

export const Rank = styled.p `
  padding: 2px 6px;
  height: 1.4rem;
  background: #E5ECFA;
  border-radius: 5px;
  color: #0044D4;
`

export const SectionGrid = styled.div `
  display:grid;
  grid-template-areas: 
  "main main . sidebar"
  "footer footer footer footer";
`

export const Logo = styled.img `
  margin-right: 1rem;
`

export const UsefulLinks = styled.div `
  grid-area: sidebar;
  color: #E5ECFA;
  line-height: 1.7rem;
  text-decoration: none;
`

export const Links = styled.a `
  color: rgba(0, 13, 42, 0.69);
  background: rgba(229, 236, 250, 0.82);
  text-decoration: none;
  padding: 2px 6px;
  height: 2rem;
  display: flex;
  border-radius: 5px;
  transition: all 0.3s;
  margin: 0.4rem;
  display:inline-block;
  line-break: normal;

  &:hover {
    transform: scale(0.99);
  }
`
export const Social = styled.div `
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const SocialLinks = styled.a `
  text-align:right;
  transition: all 0.3s;

  &:hover {
    transform: scale(0.96);
  }
`

export const SocialIcon = styled.img `
  width: 2rem;
  height: 2rem;
  fill: white;
  margin-left:1rem;
  transition: all 0.3s;

  &:hover {
    transform: scale(0.96);
  }
`