import styled, {keyframes} from "styled-components";
import {MdDone} from 'react-icons/md'

const popup = keyframes `
  0% {
    opacity:0;
  }
  10% {
    opacity: 0.7;
  }
  100% {
    opacity: 0;
    display:none;
  }
`

export const Container = styled.div `
  position: absolute;
  margin: auto;
  width: 200px;
  height: 70px;
  background: #d9f6cc;
  border: 1px solid #E5ECFA;
  border-radius: 5px;
  z-index:10;
  display:flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: ${popup} 1s;
`

export const Tick = styled(MdDone) `
  width: 20px;
  height: 20px;
  color: #226a00;
  justify-self: center;
  align-self:center;
`
