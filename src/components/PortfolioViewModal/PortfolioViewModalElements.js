import {IoClose} from 'react-icons/io5';
import styled, { keyframes } from 'styled-components'
import { device } from '../../styles/mediaQueries'

const loadAnimation = keyframes `
  0% { opacity: 0;}
  100% { opacity: 1;}
`

export const Overlay = styled.div `
  width: 100vw;
  height: 100vh;
  background: rgba(0, 13, 42, 0.7);
  position: fixed;
  left:0;
  top:0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: #E5ECFA;
  animation-name: ${loadAnimation};
  animation-duration: 0.1s;
  animation-iteration-count: 1;
`

export const Form = styled.form `
  height: 70vh;
  background: linear-gradient(0deg, rgba(0, 13, 42, 0.69), rgba(0, 13, 42, 0.69)), #E5ECFA;
  z-index: 3;
  color: #E5ECFA;
  display:flex;
  flex-direction: column;
  border-radius: 5px;
  overflow-y: auto;

  @media ${device.xs} {
    width: 95vw;
    font-size: 0.875rem;
    min-width: 330px; 
    max-width: 500px;
    padding: .3rem;
  }
  @media ${device.sm} {
    max-width: 536px;
    padding: 27px 31px 45px 31px;
  }
  @media ${device.md} {
    width: 80vw;
    max-width: 730px;
    font-size: 1rem;
  }
  @media ${device.lg} {
    max-width: 930px;
  }
  @media ${device.xl} {
    min-width: 1000px;
  }
`

export const CloseBtn = styled(IoClose) `
  color: rgba(229, 236, 250, 0.5);
  width: 25px;
  height: 25px;
  cursor: pointer;
`

export const FormTitle = styled.h2 `
  color: #E5ECFA;
  font-weight: normal;
  margin: 1rem 0;
  padding-left: 0.3rem;
`

export const SectionTable = styled.table `
  height: auto;
`

export const TableHead = styled.table `
  width: 100%;
`

export const TableRow = styled.tr `
  border-top: 1px solid #E5ECFA;
  border-bottom: 1px solid #E5ECFA;
  height:37px;
  background-color: #001B54;
  display:flex;
  justify-content: space-around;
  align-items:center;
  
  @media ${device.xs} {
    max-width: 100%;
  }
  @media ${device.sm} {
    max-width: 100%;
  }
  @media ${device.md} {
    max-width: 100%;
    font-size: 1rem;
  }
  @media ${device.lg} {
    max-width: 930px;
  }
`

export const TableH = styled.th `
  width: 100%;
  color: rgba(229, 236, 250, 0.8);
  
  @media ${device.xs} {
    font-weight: normal;

    &:nth-child(1) {
      display: none;
    } 
  }
  
  @media ${device.lg} { 
    &:nth-child(1) {
      width: 20%;
      display: unset;
    } 
    &:nth-child(2) {
      width: 30%;
    } 
    &:nth-child(3) {
      width: 20%;
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
  }
`

export const TableBody = styled.tbody `
`