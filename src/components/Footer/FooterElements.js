import styled from 'styled-components'
import { device } from '../../styles/mediaQueries'

export const FooterWrapper = styled.section `
  bottom:0;
  left: 0;
  height: 310px;
  width: 100vw;
  border-top: 1px solid #E5ECFA;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #E5ECFA;
  font-size: 14px;

  @media ${device.xs} {
    height: 5rem;
  }
  @media ${device.md} {
    height: auto;
    position: unset;
  }
`
export const FooterContainer = styled.div `
  align-items:center;

  @media ${device.xs} {
    height: 2rem;
    grid-template-columns: 1fr; 
  }
  @media ${device.lg} {
    height: 100%;
    width: 1166px;
    margin: 0 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    justify-content: space-between;
  }
`
export const Description = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  letter-spacing: 0.04rem;

  p {
    padding-top: 20px
  }

  @media ${device.xs} {
    width: 100%;

    p:nth-of-type(1) {
      display: none;
    }
  }
  @media ${device.lg} {
    p:nth-of-type(1) {
      display: flex;
    }
  }
`
export const LinksContainer = styled.div `
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 100px;

  @media ${device.xs} {
      display:none;
  }
  @media ${device.lg} {
    display: flex;
  }
`
export const Title = styled.h5 `
  font-size: 0.875rem;
`
export const Links = styled.a `
  text-decoration: none;
  color: #E5ECFA;

  &:hover {
    cursor: pointer;
  }
`
export const Donations = styled.div `
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 100px;
  color: #E5ECFA;

  @media ${device.xs} {
    display:none;
  }
  @media ${device.lg} {
    display: flex;
  }
`
export const CoinName = styled.h5 `
  font-size: 0.875rem;
  font-weight: 300;
  color: #E5ECFA;
`
export const Subscription = styled.div `
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 50px;
  color: #E5ECFA;

  p {
    padding-top: 10px;
  }

  @media ${device.xs} {
    display:none;
  }
  @media ${device.lg} {
    display: flex;
  }
`
export const Form = styled.form `
  heigth: 100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`
export const Email = styled.input `
  Background: #E5ECFA; 
  margin: 10px 0;
  border-radius: 5px;
  height: 1.5rem;
  color: #000615;

  outline:none;
  transition: border 0.2s ease;
  border: 3px solid #E5ECFA;

  &:focus {
    outline: none; 
    border: 3px solid #0044d4;
  }
`
export const Button = styled.button `
  width: 85px;
  height: 28px;
  color: #E5ECFA;
  background: rgba(68, 212, 0, 0.61);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity:0.8;
  }
`