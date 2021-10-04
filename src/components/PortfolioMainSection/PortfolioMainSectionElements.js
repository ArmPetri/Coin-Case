import styled from 'styled-components'

export const Section = styled.section `
  width: 100vw;
  height: 100%
  overflow: hidden;
  margin-bottom: 50px;
`

export const SectionContainer = styled.div `
  height: 100%;
  width: 1166px;
  margin: 0 auto;
  display: flex;
  flex-direction:column;
  justify-content: center
  align-items:center;
`

export const SectionTitle = styled.h1 `
  color: #E5ECFA;
  text-align:center;
  margin: 50px auto;
`

export const Utilities = styled.div `
  margin-bottom: 1rem;
  display:flex;
  justify-content: space-between;
`

export const Cards = styled.div `
  display:flex;
  height: 100%;

  &:nth-of-type(2) {
    align-self: flex-end;
  }
`

export const AddCoinBtn = styled.button `
  height: 34px;
  border-radius: 5px;
  background:rgba(68, 212, 0, 0.55);
  color: #E5ECFA;
  border:none;
  align-self: flex-end;
  cursor: pointer;
  padding: 0 16px;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.8;
  }
`

export const SectionTable = styled.table `

`

export const TableHead = styled.thead `
  width: 100%
`

export const TableRow = styled.tr `
  border-top: 1px solid #E5ECFA;
  border-bottom: 1px solid #E5ECFA;
  height:37px;
  background-color: #001B54;
  display:flex;
  justify-content: center;
  align-items:center;
`

export const TableH = styled.th `
  color: rgba(229, 236, 250, 0.8);
  text-align:center;

  &:nth-child(1) {
    width: 20%;
  } 
  &:nth-child(2) {
    width: 50%;
    text-align:center;
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
    padding-right: 1rem;
  }
`
export const TableBody = styled.tbody `
  width: 100%;
`
