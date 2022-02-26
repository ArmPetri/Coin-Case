import styled from 'styled-components'
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { device } from '../../styles/mediaQueries'

export const TransactionRow = styled.tr ` 
  border-bottom: 1px solid #E5ECFA;
  height: 50px;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  width: 100%;
  align-items:center;
  background: #fff;

  &:first-of-type {
    border-radius: 2px 2px 0 0;
  }
  &:last-of-type {
    border-radius: 0 0 2px 2px;
  }
  
  @media ${device.xs} {
    color:background: #E5ECFA;
    background-color: #fff;
    max-width: 100%;
    font-size: 0.7rem;
  }
  @media ${device.sm} {
    font-size: 0.875;
    background-color: #fff;
    color:rgba(178, 198, 242, 0.69);
  }
  @media ${device.md} {
    font-size: initial;
  }
`

export const TransactionData = styled.td ` 
  @media ${device.xs} {
    display:flex;
    text-align:center;

    &:nth-child(1) {
      display:none;
    } 
    &:nth-child(2) {
      width: 10%;
    } 
    &:nth-child(3) {
      width: 10%;
    } 
    &:nth-child(4) {
      width: 10%;
    } 
    &:nth-child(5) {
      width: 10%;
    } 
    &:nth-child(6) {
      width: 10%;
    } 
    &:nth-child(7) {
      width: 10%;
      justify-content: space-around;
    } 
  }

  @media ${device.lg} {
    text-align: center;

    &:nth-child(1) {
      width: 20%;
      display: initial;
    } 
    &:nth-child(2) {
      width: 30%;
    } 
    &:nth-child(3) {
      width: 20%;
    } 
    &:nth-child(4) {
      width: 20%;
      text-align:center;
    } 
    &:nth-child(5) {
      width: 30%;
      text-align:center;
    }
    &:nth-child(6) {
      width: 20%;
      text-align:center;
    }
    &:nth-child(7) {
      width: 20%;
      justify-content: space-around;
    }
  }
`

export const Type = styled.p ` 
  color: ${props => props.type};
  width: 100%;
`

export const Price = styled.input `
  color: #47526A !important;
  width: 100%;

  ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }    
  [type=number] {
    -moz-appearance: textfield;
  }

  &:enabled {
    width: auto-1rem;
    background: #E5ECFA;
    color: #47526A;
    text-indent: 1rem;
    margin: 0 0.1rem;
  }
`

export const BuyQuantity = styled.input ` 
  width: 100%;
  color: #44D400;

  ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }    
  [type=number] {
    -moz-appearance: textfield;
  }

  &:enabled {
    margin: 0 0.1rem;
    background: #E5ECFA;
    width: auto-1rem;
    color: #47526A;
    text-indent: 1rem;
  }
`

export const SellQuantity = styled.input ` 
  width: 100%;
  color: #D40044;

  ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }
  ::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
  }    
  [type=number] {
    -moz-appearance: textfield;
  }

  &:enabled {
  margin: 0 0.1rem;
    background: #E5ECFA;
    color: #47526A;
    text-indent: 1rem;
  }
`

export const Cost = styled.p ` 
  color: #47526A;
  width: 100%;
`
  
export const Proceeds = styled.p ` 
  color: #47526A;
  width: 100%;
`

export const PNL = styled.p ` 
  color: ${props => props.type};
  width: 100%;
`

export const EditBtn = styled(AiFillEdit) ` 
  color: #E5ECFA;
  color: rgba(71, 82, 106, 0.5);

  &:hover {
    color: #4C7CE0;
  }
`

export const DoneBtn = styled(AiOutlineFileDone) `
  color: #E5ECFA;
  color: rgba(71, 82, 106, 0.5);

  &:hover {
    color: #4C7CE0;
  }
`

export const RemoveBtn = styled(FiTrash2) ` 
  color: #E5ECFA;
  color: rgba(71, 82, 106, 0.5);

  &:hover {
    color: #4C7CE0;
  }
`