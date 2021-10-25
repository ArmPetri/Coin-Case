import {IoClose} from 'react-icons/io5';
import styled, { keyframes } from 'styled-components'

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
Width: 80vw;
Height: 70vh;
background: linear-gradient(0deg, rgba(0, 13, 42, 0.69), rgba(0, 13, 42, 0.69)), #E5ECFA;
z-index: 3;
color: #E5ECFA;
display:flex;
flex-direction: column;
// justify-content: space-between;
// align-items:center;
border-radius: 5px;
padding: 27px 31px 45px 31px;
overflow-y: auto;
`

export const CloseBtn = styled(IoClose) `
  color: rgba(229, 236, 250, 0.5);
  height: 25px;
  width: 25px;
  cursor: pointer;
`

export const FormTitle = styled.h2 `
color: #E5ECFA;
font-weight: normal;
margin: 1rem 0;
padding-left: 0.3rem;
`

export const SectionTable = styled.table `
  // border: 1px solid white;
`

export const TableHead = styled.table `
  // border: 1px solid white;
  width: 100%
`

export const TableRow = styled.tr `
  border-top: 1px solid #E5ECFA;
  border-bottom: 1px solid #E5ECFA;
  height:37px;
  background-color: #001B54;
  display:flex;
  justify-content: space-around;
  align-items:center;
`

export const TableH = styled.th `
  // border: 1px solid white;
  // width: 100%;
  padding: 0 20px;
  color: rgba(229, 236, 250, 0.8);
  &:nth-child(1) {
    width: 20%;
  } 
  &:nth-child(2) {
    width: 30%;
    // border: 1px solid red;
    text-align:left;
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
export const TableBody = styled.tbody `

`