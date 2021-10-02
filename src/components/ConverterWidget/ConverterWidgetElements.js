import styled from 'styled-components'

import {RiArrowDownSFill} from 'react-icons/ri'
import {RiArrowUpSFill} from 'react-icons/ri'

export const DropdownWrapper = styled.div `
  width: 100%;
  user-select: none;
  position: relative;
  margin: 20px;
  border: 5px;
  display:flex;
  justify-content: center;
`

export const DropdownBtn = styled.div `
  width: 400px;
  background-color: #E5ECFA;
  color: #000615;
  padding: 15px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-shadow: 3px 3px 10px 6px rgba(255, 255, 255, 0.06);
  border-radius: 5px;

  span {
    text-transform: capitalize;
  }
`

export const DropdownContent = styled.div `
  background: #E5ECFA;
  position: absolute;
  border-radius: 5px;
  top: 110%;
  width: 350px;
  padding: 10px;
  color: black;
  overflow-y: scroll;
  height: 40vh;
  box-shadow: 3px 3px 10px 6px rgba(255, 255, 255, 0.06);
  z-index: 1;
`

export const DropdownItem = styled.div `
  padding: 15px;  
  cursor: pointer;
  transition: all 0.1s;

  img {
    height: 1rem;
    width: 1rem;
  }

  &:hover {
    background: grey;
    border-radius: 5px;
  }
`

export const Arrdown = styled(RiArrowDownSFill) `
  color: black;
`
export const Arrup = styled(RiArrowUpSFill) `
  color: black;
`
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
