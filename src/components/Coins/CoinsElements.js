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
  flex-direction:row;
  justify-content: center
  align-items:center;
  // border: 1px solid red;
`

export const SectionTitle = styled.h1 `
  color: #E5ECFA;
  text-align:center;
  margin: 50px auto;
`

export const DataContainer = styled.div `
  padding: 3.75rem 1.875rem;
  color: #E5ECFA;
  background: linear-gradient(0deg, rgba(0, 13, 42, 0.69), rgba(0, 13, 42, 0.69)), #E5ECFA;
  // border: 1px solid red;
  border-radius: 5px;

  &:first-of-type {
    // background: green;
    width: 60%;
    margin-right: 2.688rem;
  }

  &:nth-of-type(2) {
    // background-color: red;
    width: 40%;
  }
`

export const DataContainerRow = styled.div `
  display: flex;
  flex-direction: column;

  &:nth-of-type(2) {
    flex-direction: row;
  }
  &:nth-of-type(3) {
    flex-direction: row;
    margin-top: 1rem;

  }
`

export const DataSection = styled.div `
  font-size: 0.85rem;
  width:50%;

  div {
    border-bottom: 1px solid #E5ECFA;
  }

  &:nth-of-type(1) {
    border-right: 1px solid #E5ECFA;
    padding-right: 1rem;
    margin-right: 1rem;
  }
`

export const DataContainerTitle = styled.h2 `
  padding-bottom: 1rem;

  &:nth-of-type(2) {
    // border: 1px solid red;
    display: inline;
    margin-bottom: 1rem;
  }
`

export const Text =styled.p `
  color: ${props => props.type};
  // color: white;

  &:nth-of-type(1) {
    display: inline;
    margin-left: 1rem;
    height: 100%;
  }
`

export const DataRow = styled.div `
  display: flex;
  justify-content: space-between;
  padding: .5rem;
  width: 100%;

  &:nth-of-type(2) {
    // justify-content: start;
  }
`

export const DataName = styled.p `

`

export const DataValue = styled.p `
  font-weight: bold;
`

export const DataPriceSection = styled.div `
  font-size: 0.85rem;
  width:50%;
  padding: 0.5rem;
`

export const DataPrice = styled.div `
  margin: 0 auto;
  display:flex;
  justify-content:space-between;

  $(DataSection) {
    border: none;
  }
`

export const TimeFrame = styled.button `
  color: rgba(0, 13, 42, 0.69);
  background: #E5ECFA;
  width: 2.5rem;
  height: 2.125rem;
  // margin: auto;
  border: none;
  transition: all 0.15s ease-in-out;

  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }

  &:last-of-type {
    border-radius: 0 5px 5px 0;
    margin-right: 0;
  }

  &:focus {
    background: #000D2A;
    color: #E5ECFA;
    border: none;
    transform: scale(0.96);
  }

  &:hover {
    // opacity: 0.95;
    transform: scale(0.95);
  }
`

export const TimeFramePrice = styled.p `
  background: #E5ECFA;
  // width: 20.5rem;
  height: 2.125rem;
  color: ${props => props.type};
  border-radius: 5px;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`

export const Rank = styled.p `
  padding: 2px 6px;
  height: 1.4rem;
  background: #E5ECFA;
  border-radius: 5px;
  color: #0044D4;
`

export const SectionGrid = styled.div `
  display:grid;
  grid-template-areas: 
  "main main . sidebar"
  "footer footer footer footer";
`

export const Logo = styled.img `
  margin-right: 1rem;
`

export const UsefulLinks = styled.div `
  grid-area: sidebar;
  color: #E5ECFA;
  // display:flex;
  // flex-direction: column;
  line-height: 1.7rem;
  text-decoration: none;
  // border: 1px solid red;
`

export const Links = styled.a `
  color: rgba(0, 13, 42, 0.69);
  background: rgba(229, 236, 250, 0.82);
  text-decoration: none;
  padding: 2px 6px;
  height: 2rem;
  // width: 5rem;
  display: flex;
  // border: 1px solid red;
  border-radius: 5px;
  transition: all 0.3s;
  margin: 0.4rem;
  display:inline-block;
  line-break: normal;

  &:hover {
    // color: #4C7CE0;
    // opacity:0.95;
    transform: scale(0.99);
  }
`
export const Social = styled.div `
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const SocialLinks = styled.a `
  text-align:right;
  transition: all 0.3s;

  &:hover {
    // opacity: 0.95;
    transform: scale(0.96);
  }
`

export const SocialIcon = styled.img `
  width: 2rem;
  height: 2rem;
  fill: white;
  margin-left:1rem;
  // background-color: white;
  // color: white;
  // display: inline;
  transition: all 0.3s;

  &:hover {
    // opacity: 0.95;
    transform: scale(0.96);
  }
`