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
Width: 390px;
Height: 500px;
background: linear-gradient(0deg, rgba(0, 13, 42, 0.69), rgba(0, 13, 42, 0.69)), #E5ECFA;
z-index: 3;
color: #E5ECFA;
display:flex;
flex-direction: column;
justify-content: space-around;
// align-items:center;
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
margin-top:0.5rem;
`



export const Tab = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  // padding-top: 1rem;
  // padding-bottom: 1rem;
  // border-bottom: 1px solid rgba(229, 236, 250, 0.2);
`

export const TabName= styled.a `
  display: flex;
  cursor: pointer;
  list-style: none;
  padding: 0.5rem 0;
  border-bottom: 2px solid rgba(229, 236, 250, 0.2);
  width: 160px;
  // border: 1px solid red;
  justify-content:center;
  align-items: center;

  ${({ active }) => 
  active && `
    border-bottom:2px solid rgba(0, 68, 212, 0.8);
  `
}
  `

export const FormLabel = styled.label `
line-height: unset;
margin: 0.5rem 0;

& .grey {
  border: 1px solid rgba(178,198,242,0.69);
  color: rgba(178,198,242,0.9);
  background: linear-gradient(
    0deg
    ,rgba(0,13,42,0.69),rgba(0,13,42,0.69)),#C4C4C4;
}

`

export const FormInput = styled.input `
height: 34px;
width: 328px;
background: #E5ECFA;
color:black;
text-indent: 1rem;
margin-top: 10px;
border-radius: 5px;

transition: box-shadow 0.2s ease-in;

&:focus {
  box-shadow: 0 0 3px 2px #0044D4; 
}

`
export const BtnWrap = styled.div `
  display: flex;
  justify-content: space-between;
`

export const CancelBtn = styled.button `
font-size: 1rem;
height: 34px;
width: 160px;
border-radius: 5px;
background-color: rgba(229, 236, 250, 0.5);
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

export const SubmitBtn = styled.input `
height: 34px;
width: 160px;
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
export const CoinSymbol = styled.h6 `
  background: #E5ECFA;
  height: 34px;
  width: 48px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color black;
  font-size: 1rem;
  margin-top: 10px;
  display:flex;
  justidfy-content: center;
  align-items:center;
  text-transform: uppercase;
`
export const CoinQuantity = styled.div `
  height: 34px;
  width: 328px;
  display:flex;
  // justify-content:center;
  align-items: center;
  border-radius: 5px;
`

export const QuantityInput = styled.input `
  height: 34px;
  width: 328px;
  // width: 280px;
  background: #E5ECFA;
  color:black;
  // text-align:left;
  // padding-left: 1rem;
  text-indent: 1rem;
  margin-top: 10px;
  border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;

  transition: box-shadow 0.2s ease-in;

  &:focus {
    box-shadow: 0 0 3px 2px #0044D4; 
}
`