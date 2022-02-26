import styled from 'styled-components'
import { device } from '../../styles/mediaQueries'

export const CoinRow = styled.tr `
  border-bottom: 1px solid #E5ECFA;
  height: 50px;
  color:rgba(178, 198, 242, 0.69);
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`

export const CoinData = styled.td `
  display:flex;
  justify-content: space-evenly;
  align-items:center;

  &:nth-child(1) {
    width: 20%;
  } 
  &:nth-child(2) {
    flex-direction: row;
    justify-content: space-between;
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
    }
    &:nth-child(5) {
      width: 50%;
      padding: none;
      display:none;
    }
    &:nth-of-type(2) {
      justify-content: space-around;
    }
  }
  @media ${device.md} {
    &:nth-of-type(2) {
      justify-content: space-between;
    }
    &:nth-child(2) {
      width: 80%;
    }
    &:nth-child(5) {
      display:unset;
    }
  }
  @media ${device.lg} {
    &:nth-child(5) {
      width: 30%;
    } 
  }
`

export const Star = styled.img `
  fill: yellow;

  &:hover {
    transform:scale(1.2);
  }
  &:active {
    fill: yellow;
  }
`
export const MarketCapRank = styled.p `
`
export const CoinLogo = styled.img `
  width:16px;
  height:16px;

  @media ${device.md} {
    margin-left: 1rem;
  }
`
export const Name = styled.p `
  color:#E5ECFA;
  width:40%;
  text-align:left;

  @media ${device.xs} {
    display:none;
  }
  @media ${device.md} {
    display:initial;
    width: 70%;
    padding-left: 1rem;
  }
`
export const Symbol = styled.p `
  text-transform: uppercase;
  text-align: left;

  z-index: ${props => props.zIndex};
  opacity: ${props => props.zIndex};
  color: ${props => props.shade}

  @media ${device.xs} {
    width: 40%
  }
  @media ${device.md} {
    width: 20%
  }
`

export const CurrentPrice = styled.p `
  z-index: ${props => props.zIndex};
  opacity: ${props => props.zIndex};
  color: ${props => props.shade}
`

export const PriceChangePositive = styled.p `
  color: #44D400;
`

export const PriceChangeNegative = styled.p `
  color: #D40044;
`

export const MarketCap = styled.p `
`
