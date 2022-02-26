import styled from 'styled-components'
import { device } from '../../styles/mediaQueries'

export const SectionContainer = styled.div `
  margin: 0 auto;
  display: flex;
  flex-direction:row;
  justify-content: center
  align-items:center;

  @media ${device.xs} {
    height: 100vh;
    font-size: 0.875rem;
    min-width: 330px; 
    max-width: 500px;
    overflow-x: hidden;
    text-align:center;
  }
  @media ${device.sm} {
    max-width: 536px;
  }
  @media ${device.md} {
    height: 100%;
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

export const LeftWrapper = styled.div `
  display:flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${device.xs} {
    height:80%;
    width: 100%;
    padding: 1rem;
    justify-content: center;
    align-items:center;
  }
  @media ${device.md} {
    height:unset;
    align-items: start;
    width: 50vw;
    padding: none;
    padding: 1rem;
  }
  @media ${device.lg} {
    height:80%;
    height:unset;
  }
`

export const SectionTitle = styled.h1 `
  color: #E5ECFA;
  line-height:2rem;
  margin-top: 2rem;

  @media ${device.xs} {
    text-align:center;
  }
  @media ${device.md} {
    text-align:left;
    margin: 50px 0;
  }
`

export const SectionSubTitle = styled.h4 `
  color: #E5ECFA;
  text-align:left;
  font-weight:normal;
  line-height:2rem;

  @media ${device.xs} {
    width: 80%;
    text-align:center;
    margin: 25px 0;
  }
  @media ${device.md} {
    width: initial;
    text-align: left;
    max-width: 100%;
  }
`

export const BtnWrap = styled.div`
  display:flex;
  width: 100%;

  @media ${device.xs} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${device.md} {
    justify-content: center;
    width: 100%;
  }
  @media ${device.lg} {
    flex-direction: row;
    justify-content: flex-start;
  }  
`

export const SignupBtn = styled.button `
  height: 34px;
  border-radius: 5px;
  background:rgba(68, 212, 0, 0.55);
  color: #E5ECFA;
  border:none;
  cursor: pointer;
  padding: 0 2rem;
  transition: opacity 0.2s ease-in;
  font-size: .8rem;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.xs} {
    width: 80%;
  }
  @media ${device.lg} {
    width: unset;
  }
`

export const LoginBtn = styled.button `
  height: 34px;
  border-radius: 5px;
  background:#E5ECFA;
  color: rgba(68, 212, 0, 1);
  border:none;
  cursor: pointer;
  padding: 0 2rem;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.8;
  }

  @media ${device.xs} {
    width: 80%;
    margin-top:1rem;
  }
  @media ${device.lg} {
    width: unset;
    margin-top:unset;
    margin-left: 1rem;
  }
`

export const RightWrapper = styled.div `
  @media ${device.xs} {
    display: none;
  }
  @media ${device.md} {
    display: initial;
    width: 50%
    height: auto;
    display:flex;
    justify-content:center;
    align:items:center;
    margin: 50px 25px;
  }
`

export const PortfolioImage = styled.img `
  border: 1px solid #E5ECFA;
  margin: auto;

  @media ${device.xs} {
    max-width: 100%;
    max-height: 100%;
  }
  @media ${device.lg} {
    max-width: 100%;
    max-height: auto;
  }
`
