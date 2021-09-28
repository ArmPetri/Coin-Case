import styled from 'styled-components'


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
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 3rem;
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
export const MarketCapRank = styled.p `

`
export const CoinLogo = styled.img `

`
export const Name = styled.p `

`
export const Symbol = styled.p `

`
export const CurrentPrice = styled.p `

`
export const MarketCap = styled.p `

`
