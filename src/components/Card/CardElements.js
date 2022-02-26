import styled from 'styled-components'
import { device } from '../../styles/mediaQueries'

export const CardWrapper = styled.div `
  background: linear-gradient(0deg, rgba(0, 13, 42, 0.69), rgba(0, 13, 42, 0.69)), #C4C4C4;
  border-radius: 5px;
  text-align:center;

  @media ${device.xs} {
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:nth-of-type(1){
      margin-bottom: .5rem;
    }
    &:nth-of-type(2){
      margin-right: .25rem;
    }
    &:nth-of-type(3){
      margin-left: .25rem;
    }
  }

  @media ${device.lg} {
    padding: 10px 30px;
    margin: 0 40px 0 0;
  }
`

export const CardTitle = styled.h4 `
  color: rgba(178, 198, 242, 0.9);
  margin-bottom:7px;
  font-weight: normal;
`

export const CardValue = styled.p `
  color:#E5ECFA;
  
  @media ${device.xs} {
    font-size: 1rem;
  }
  @media ${device.md} {
    font-size: 20px;
  }
`

export const ValuePercentagePositive = styled.span `
  color: #44D400;
`

export const ValuePercentageNegative = styled.span `
  color: #D40044;
`