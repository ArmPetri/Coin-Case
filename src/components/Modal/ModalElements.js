import {IoClose} from 'react-icons/io5';
import styled, { keyframes } from 'styled-components'

const loadAnimation = keyframes `
  0% { opacity: 0;}
  100% { opacity: 1;}
`

export const Overlay = styled.div `
  width: 100%;
  height: 100%;
  background: rgba(0, 13, 42, 0.7);
  position: fixed;
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
  Width: 390px;
  Height: 431px;
  background: linear-gradient(0deg, rgba(0, 13, 42, 0.69), rgba(0, 13, 42, 0.69)), #E5ECFA;
  z-index: 3;
  color: #E5ECFA;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  padding: 27px 31px 45px 31px;
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
`

export const FormLabel = styled.label `
  line-height: unset;
`

export const FormInput = styled.input `
  height: 34px;
  width: 328px;
  background: #E5ECFA;
  border-radius: 5px;
  color:black;
  text-align:center;
  margin-top: 10px;

  transition: box-shadow 0.2s ease-in;

  &:focus {
    box-shadow: 0 0 3px 2px #0044D4; 
  }
`

export const SubmitBtn = styled.input `
  height: 34px;
  width: 328px;
  border-radius: 5px;
  background:rgba(68, 212, 0, 0.55);
  color: #E5ECFA;
  z-index: 5;
  border:none;
  text-align:center;
  cursor: pointer;
  margin-top: 15px;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.8;
  }
`

export const FormSubtext = styled.div `
text-align:center;

span {
  color: #44D400;
  cursor: pointer;
}
`