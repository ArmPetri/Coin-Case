import styled from 'styled-components'
import {BiPlus} from 'react-icons/bi'
import {IoChevronForwardOutline} from 'react-icons/io5'
import { keyframes } from 'styled-components'
import { device } from '../../styles/mediaQueries'

export const CoinRow = styled.tr `
  border-bottom: 1px solid #E5ECFA;
  height: 50px;
  color:rgba(178, 198, 242, 0.69);
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
`

export const CoinData = styled.td `
  display:flex;
  justify-content: space-around;
  align-items:center; 

  @media ${device.xs} {
    font-size: 0.875rem;

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
    font-size: 1rem;

    &:nth-child(1) {
      width: 10%;
    } 
    &:nth-child(2) {
      width: 20%;
      text-align:center;
    } 
    &:nth-child(3) {
      width: 20%;
    } 
    &:nth-child(4) {
      width: 15%;
    } 
    &:nth-child(5) {
      display: unset;
      width: 30%;
    }
    &:nth-child(6) {
      width: 20%;
    }
    &:nth-child(7) {
      width: 25%;
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
    }
  }
  @media ${device.xl} {
    &:nth-child(2) {
      width: 50%;
    } 
  }

`

export const Star = styled.img `
  fill: yellow;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform:scale(1.2);
  }
`

export const MarketCapRank = styled.p `
  @media ${device.xs} {
    display: none;
  }
  @media ${device.md} {
    display: block;
  }
`

export const CoinLogo = styled.img `
  width:16px;
  height:16px;
`

export const Name = styled.p `
  color:#E5ECFA;
  text-align:left;

  @media ${device.xs} {
    display:none;
  }
  @media ${device.lg} {
    display:initial;
    width: 70%;
    padding-left: 1rem;
  }
`

export const Symbol = styled.p `
  text-transform: uppercase;
  text-align: left;
`

export const CurrentPrice = styled.p `
  z-index: ${props => props.zIndex};
  opacity: ${props => props.zIndex};
  color: ${props => props.shade}
`

export const PriceChangePositive = styled.p `
  color: #44D400;
  text-align:center;
`

export const PriceChangeNegative = styled.p `
  color: #D40044;
  text-align:center;
`

export const MarketCap = styled.p `
  text-align: center;
`

export const Holdings = styled.p `
  color:#E5ECFA;
  z-index: ${props => props.zIndex};
  opacity: ${props => props.zIndex};
  color: ${props => props.shade}
  display: flex;
  flex-direction: column;
  
  @media ${device.xs} {
    font-size: 0.875rem;  
  }
  @media ${device.lg} {
    font-size: 0.9rem;
  }
`

export const PNL = styled.p `
  color: ${props => props.type};
  width: 75%;
  text-align:center;
  
  @media ${device.xs} {
    font-size: 0.7rem;
  }
  @media ${device.lg} {
    font-size: 0.9rem;
  }
`

export const Transactions = styled.div `
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`

export const Plus = styled(BiPlus) `
  color: #E5ECFA;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #4C7CE0;
    transform:scale(1.2);
  }
`

export const Greater = styled(IoChevronForwardOutline) `
  color: #E5ECFA;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #4C7CE0;
    transform:scale(1.2);
  }
`
export const Tooltip = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  &:first-of-type {
    padding-bottom: 0.1rem;
  }
  &:last-of-type {
    padding-top: 0.1rem;
  }
`

const fadein = keyframes `
  0% {opacity:0;}
  100% {opacity:1;}
`

export const TooltipText = styled.span `
  animation-name: ${fadein};
  animation-duration: 0.8s;
  animation-iteration-count: 1;
  width: 130px;
  height: 30px;
  right: 3rem;
  top: -50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: #000615;
  color: #E5ECFA;
  border-radius: 5px;
  text-align:center;
  z-index.5;
`