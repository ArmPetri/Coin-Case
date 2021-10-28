import styled from 'styled-components'
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

export const TransactionRow = styled.tr ` 
  border-bottom: 1px solid #E5ECFA;
  height: 50px;
  color:rgba(178, 198, 242, 0.69);
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  `

export const TransactionData = styled.td ` 
  display:flex;
  justify-content: center;
  padding: 0 20px;
  &:nth-child(1) {
    width: 20%;
  } 
  &:nth-child(2) {
    width: 30%;
    text-align:left;
    padding-left: 2.5rem;
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
    justify-content: space-around;
  }
`

export const Type = styled.p ` 
  color: white;
  `

  export const Price = styled.input `
  &:enabled {
    background: white;
    color: #47526A;
    text-indent: 1rem;
  }
  `

export const BuyQuantity = styled.input ` 
  color: #44D400;
  &:enabled {
    background: #E5ECFA;
    width: auto;
    color: #47526A;
    text-indent: 1rem;
  }
  `

export const SellQuantity = styled.input ` 
  color: #D40044;
  &:enabled {
    background: #E5ECFA;
    color: #47526A;
    text-indent: 1rem;
  }
  `

export const Cost = styled.p ` 

  `

export const Proceeds = styled.p ` 

  `

  export const PNL = styled.p ` 

  `

  export const EditBtn = styled(AiFillEdit) ` 
    color: #E5ECFA;

    &:hover {
      color: #4C7CE0;
    }
  `

  export const DoneBtn = styled(AiOutlineFileDone) `
  color: #E5ECFA;

  &:hover {
    color: #4C7CE0;
  }
  `

  export const RemoveBtn = styled(FiTrash2) ` 
    color: #E5ECFA;

    &:hover {
      color: #4C7CE0;
    }
  `