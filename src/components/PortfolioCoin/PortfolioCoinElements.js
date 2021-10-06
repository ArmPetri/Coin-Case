import styled from 'styled-components'
import {BiPlus} from 'react-icons/bi'
import {IoChevronForwardOutline} from 'react-icons/io5'


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
  justify-content: space-around;
  align-items:center;
  
  &:nth-child(1) {
    width: 20%;
  } 
  &:nth-child(2) {
    width: 50%;
    // border: 1px solid red;
    text-align:center;
    padding-left: 2.5rem;
  } 
  &:nth-child(3) {
    width: 20%;
    // padding-left: 1rem;
  } 
  &:nth-child(4) {
    width: 20%;
  } 
  &:nth-child(5) {
    width: 30%;
  }
  &:nth-child(6) {
    width: 20%;
  }
  &:nth-child(7) {
    width: 20%;
  }
`

export const Star = styled.img `
`
export const MarketCapRank = styled.p `

`
export const CoinLogo = styled.img `

`
export const Name = styled.p `
  color:#E5ECFA;
  text-align:left;
`
export const Symbol = styled.p `
  text-transform: uppercase;
  text-align: left;
`
export const CurrentPrice = styled.p `

`

export const MarketCap = styled.p `

`
export const Holdings = styled.p `

`
export const PNL = styled.p `
  width: 80%;
  text-align:center;
`
export const Transactions = styled.div `
  display: flex;
  flex-direction: column;
  color: white;
  padding-right: 0.5rem
`
export const Plus = styled(BiPlus) `
  color: #E5ECFA;

  &:hover {
    color: #4C7CE0;
  }
`

export const Greater = styled(IoChevronForwardOutline) `
  color: #E5ECFA;

  &:hover {
    color: #4C7CE0;
  }
`
export const Tooltip = styled.div `
  position: relative;
`

export const TooltipText = styled.span `
  width: 130px;
  height: 30px;
  left: -800%;
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
`