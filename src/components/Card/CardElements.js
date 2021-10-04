import styled from 'styled-components'

export const CardWrapper = styled.div `
  background: linear-gradient(0deg, rgba(0, 13, 42, 0.69), rgba(0, 13, 42, 0.69)), #C4C4C4;
  border-radius: 5px;
  padding: 10px 30px;
  margin-right: 40px;
  text-align:center;
`

export const CardTitle = styled.h4 `
  color: rgba(178, 198, 242, 0.9);
  margin-bottom:7px;
  font-weight: normal;
`

export const CardValue = styled.p `
  color:#E5ECFA;
  font-size: 20px;
`


export const ValuePercentagePositive = styled.span `
  color: #44D400;
  `
  export const ValuePercentageNegative = styled.span `
  color: #D40044;
`